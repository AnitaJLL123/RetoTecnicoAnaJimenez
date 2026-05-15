import { test } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 3 - Validaciones de formularios financieros', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);

  await simulador.irAlSimulador();
  await simulador.seleccionarTipoCredito('PRECISO');

  await simulador.ingresarMontoDeseado('-1000');
  await simulador.validarMensajeError();

  await simulador.ingresarMontoDeseado('abc');
  await simulador.validarCampoNumerico();

  await simulador.ingresarMontoDeseado('999999999');
  await simulador.validarMensajeError();
});