import { test } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
import {  creditoHipotecario,} from "../../fixtures/simulador-creditos.data";
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 2 - Simulación exitosa Crédito Hipotecario Vivienda', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);
  await simulador.irAlSimulador();
  await simulador.validarTitulo();
  await simulador.completarSimulacion(
    creditoHipotecario
  );
  await simulador.validarCuotaMensual();
  await simulador.validarTasaInteres();
  await simulador.validarTablaAmortizacion();
});