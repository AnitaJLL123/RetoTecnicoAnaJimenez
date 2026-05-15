import { test, expect } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 5 - Comparación crédito consumo vs hipotecario', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);

  await simulador.irAlSimulador();

  await simulador.completarSimulacion({
    tipoCredito: 'PRECISO',
    montoDeseado: '30000',
    plazo: '2 años',
  });

  const cuotaConsumo = await simulador.obtenerCuotaMensual();

  await page.reload();
  await simulador.aceptarCookiesSiAparece();
  await simulador.limpiarOverlays();

  await simulador.completarSimulacion({
    tipoCredito: 'HIPOTECARIO VIVIENDA',
    montoVivienda: '80000',
    montoDeseado: '30000',
    plazo: '10 años',
  });

  const cuotaHipotecario = await simulador.obtenerCuotaMensual();

  expect(cuotaConsumo).not.toBe(cuotaHipotecario);
});