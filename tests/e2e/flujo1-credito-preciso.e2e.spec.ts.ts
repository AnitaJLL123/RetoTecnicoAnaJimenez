import { test } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
import { creditoPreciso } from '../../fixtures/simulador-creditos.data';
test.describe.configure({ mode: 'serial' });

test.afterEach(async ({ page, context }) => {
  await context.clearCookies();

  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
});

test('@e2e flujo q - Crédito preciso', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);
  await simulador.aceptarCookiesSiAparece();
  await simulador.limpiarOverlays()
  await simulador.irAlSimulador();
  await simulador.validarTitulo();
  await simulador.completarSimulacion(
    creditoPreciso
  );

  await simulador.validarCuotaMensual();
  await simulador.validarTasaInteres();
  await simulador.validarTablaAmortizacion();
});