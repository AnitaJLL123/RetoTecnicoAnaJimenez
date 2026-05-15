import { test } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 4 - Validar diferentes escenarios de cálculo', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);

  await simulador.irAlSimulador();

  const escenarios = [
    { tipo: 'PRECISO', monto: '3000', plazo: '6 meses' },
    { tipo: 'PRECISO', monto: '5000', plazo: '12 meses' },
    { tipo: 'PRECISO', monto: '8000', plazo: '24 meses' },
  ];

  for (const escenario of escenarios) {
    await simulador.seleccionarTipoCredito(escenario.tipo);
    await simulador.ingresarMontoDeseado(escenario.monto);
    await simulador.seleccionarPlazo(escenario.plazo);
    await simulador.seleccionarAmortizacion();
    await simulador.simular();
    await simulador.validarCuotaMensual();
  }
});