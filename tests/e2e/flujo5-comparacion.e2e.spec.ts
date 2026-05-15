import { test, expect } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 5 - Comparación crédito consumo vs hipotecario', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);

  await simulador.irAlSimulador();

  await simulador.seleccionarTipoCredito('PRECISO');
  await simulador.ingresarMontoDeseado('30000');
  await simulador.seleccionarPlazo('24 meses');
  await simulador.seleccionarAmortizacion();
  await simulador.simular();

  const cuotaConsumo = await simulador.obtenerCuotaMensual();

  await simulador.seleccionarTipoCredito('HIPOTECARIO VIVIENDA');
  await simulador.ingresarMontoVivienda('80000');
  await simulador.ingresarMontoDeseado('30000');
  await simulador.seleccionarPlazo('60 meses');
  await simulador.seleccionarAmortizacion();
  await simulador.simular();

  const cuotaHipotecario = await simulador.obtenerCuotaMensual();

  expect(cuotaConsumo).not.toBe(cuotaHipotecario);
});