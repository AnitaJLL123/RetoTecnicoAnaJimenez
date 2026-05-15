import { test, expect } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 6 - Responsive mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  const simulador = new SimuladorCreditoPage(page);

  await simulador.irAlSimulador();

  await expect(page.locator('iframe.microsite-iframe')).toBeVisible();

  await simulador.seleccionarTipoCredito('PRECISO');
});
