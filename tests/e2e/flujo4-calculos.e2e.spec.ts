import { test } from '@playwright/test';
import { SimuladorCreditoPage } from '../../pages/SimuladorCreditoPage';
test.describe.configure({ mode: 'serial' });

test('@e2e Flujo 4 - Validar diferentes escenarios de cálculo', async ({ page }) => {
  const simulador = new SimuladorCreditoPage(page);

  const escenarios = [
    { tipo: 'PRECISO', monto: '3000', plazo: '6 meses' },
    { tipo: 'PRECISO', monto: '5000', plazo: '1 año' },
    { tipo: 'PRECISO', monto: '8000', plazo: '2 años' },
  ];

  for (const escenario of escenarios) {
    await simulador.irAlSimulador();

    await simulador.completarSimulacion({
      tipoCredito: escenario.tipo,
      montoDeseado: escenario.monto,
      plazo: escenario.plazo,
    });

    await simulador.validarCuotaMensual();
  }
});