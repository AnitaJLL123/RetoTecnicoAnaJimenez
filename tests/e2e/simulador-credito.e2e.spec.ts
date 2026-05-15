import { test } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
//import { clienteCredito } from '../../fixtures/test-data';

test('@e2e flujo básico del simulador de crédito', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);
  await simulador.aceptarCookiesSiAparece();
  await simulador.limpiarOverlays()
  await simulador.irAlSimulador();
  await simulador.validarTitulo();
  await simulador.creditoPreciso();

});