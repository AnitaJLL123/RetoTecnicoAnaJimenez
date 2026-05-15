import { Page, expect } from "@playwright/test";

type DatosCredito = {
  tipoCredito: string;
  montoDeseado: string;
  montoVivienda?: string;
  plazo: string;
};

export class SimuladorCreditoPage {
  constructor(private page: Page) {}

  private simuladorFrame() {
    return this.page
      .locator("#block-pichincha-theme-content iframe")
      .contentFrame();
  }

  async aceptarCookiesSiAparece() {
    const botonAceptar = this.page.getByRole("button", {
      name: /accept all cookies/i,
    });

    if (await botonAceptar.isVisible({ timeout: 10000 }).catch(() => false)) {
      await botonAceptar.click();
    }
  }

async limpiarOverlays() {
  await this.page.evaluate(() => {
    document.querySelector("#onetrust-consent-sdk")?.remove();
    document.querySelector("#sticky-navbar-content")?.remove();
    document.querySelector('nav[aria-label="Enlaces de salto al contenido"]')?.remove();

    document
      .querySelectorAll('[id*="onetrust"], [class*="onetrust"], [id*="cookie"], [class*="cookie"]')
      .forEach((el) => el.remove());
  });
}

  async irAlSimulador() {
    await this.page.goto("/detalle-producto/simulador-de-credito", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    await this.aceptarCookiesSiAparece();
  }
  async validarTitulo() {
    await expect(this.page).toHaveTitle(
      "Simulador de Crédito - consumo, hipotecario y educativo",
    );
  }

  async completarSimulacion(datos: DatosCredito) {
  await this.aceptarCookiesSiAparece();
  await this.limpiarOverlays();
  await this.seleccionarTipoCredito(datos.tipoCredito);

  if (datos.montoVivienda) {
    await this.ingresarMontoVivienda(datos.montoVivienda);
  }

  await this.ingresarMontoDeseado(datos.montoDeseado);
  await this.seleccionarPlazo(datos.plazo);
  await this.seleccionarAmortizacion();
  await this.simular();
  }

  async seleccionarTipoCredito(tipo: string) {
  const frame = this.simuladorFrame();
  await frame
    .locator("div")
    .filter({ hasText: /Selecciona un tipo de crédito/i })
    .nth(2)
    .click();

  const opciones = frame.locator(".bp-select-multiple__list-item");
  await expect(opciones.first()).toBeVisible({ timeout: 10000 });
  await opciones
    .filter({ hasText: new RegExp(tipo, "i") })
    .click();
  }

 async ingresarMontoDeseado(monto: string) {
  const frame = this.simuladorFrame();
  await frame
    .getByRole("textbox")
    .last()
    .fill(monto);
}
async ingresarMontoVivienda(monto: string) {
  const frame = this.simuladorFrame();
  await frame
    .getByRole("textbox")
    .first()
    .fill(monto);
}

async seleccionarPlazo(plazo: string) {
  await this.limpiarOverlays();

  const frame = this.simuladorFrame();

  // Validar que el formulario ya cargó el plazo
  await expect(frame.locator("body")).toContainText(
    /Selecciona un plazo/i,
    {
      timeout: 10000,
    }
  );

  // Combo plazo
  const comboPlazo = frame
    .locator(".bp-select-multiple")
    .filter({ hasText: /Selecciona un plazo/i })
    .last();

  await expect(comboPlazo).toBeVisible({
    timeout: 10000,
  });

  await comboPlazo.scrollIntoViewIfNeeded();

  // Click en área realmente clickeable
  await comboPlazo
    .locator(".bp-select-multiple__input-container")
    .click({ force: true });

  // Espera pequeña para render dropdown
  await this.page.waitForTimeout(500);

  // Opciones
  const opciones = frame.locator(".bp-select-multiple__list-item");

  const cantidadOpciones = await opciones.count();

  console.log("Cantidad opciones plazo:", cantidadOpciones);

  // Debug completo
  console.log(
    "Texto body después abrir plazo:"
  );

  console.log(
    await frame.locator("body").innerText()
  );

  // Validación
  expect(cantidadOpciones).toBeGreaterThan(0);

  // Seleccionar plazo
  await opciones
    .filter({
      hasText: new RegExp(plazo, "i"),
    })
    .first()
    .click({ force: true });

  console.log("Plazo seleccionado:", plazo);
}

async seleccionarAmortizacion() {
  const frame = this.simuladorFrame();

  await frame
    .locator(".radio-item__input__desciption > .typography")
    .first()
    .click({ force: true });
}
async simular() {
  const frame = this.simuladorFrame();
  const btnSimular = frame.getByRole("button", {name: /simular/i});
  await expect(btnSimular).toBeVisible({ timeout: 10000 });
  await expect(btnSimular).toBeEnabled({ timeout: 10000 });
  await btnSimular.click();
}

async validarCuotaMensual() {
  const frame = this.simuladorFrame();

  const resultado = frame.locator(
    ".simulation-container__quota__detail"
  );

  await expect(resultado).toContainText(
    /\$\d+[.,]\d{2}/,
    {
      timeout: 30000,
    }
  );
}
async validarTasaInteres() {
  const frame = this.simuladorFrame();

  const resultado = frame.locator(
    ".simulation-container__quota__detail"
  );

  await expect(
    resultado.getByText(/tasa de interés referencial/i)
  ).toBeVisible();

  await expect(
    resultado.getByText(/\d+[.,]?\d*%/)
  ).toBeVisible();
}
async validarTablaAmortizacion() {
  const frame = this.simuladorFrame();

  await frame
    .getByRole("button", {
      name: /ver tabla de amortización/i,
    })
    .click();

  await expect(
    frame.locator(".modal_header")
  ).toBeVisible({
    timeout: 10000,
  });
}
async validarMensajeError() {
  const frame = this.simuladorFrame();

  await expect(
    frame.getByText(/mínimo|máximo|inválido|ingresa|obligatorio/i)
  ).toBeVisible({ timeout: 10000 });
}

async validarCampoNumerico() {
  const frame = this.simuladorFrame();

  const valor = await frame.getByRole("textbox").last().inputValue();

  console.log("Valor del campo:", valor);

  expect(valor).not.toBe("abc");
}
async obtenerCuotaMensual() {
  const frame = this.simuladorFrame();

  const resultado = frame.locator(
    ".simulation-container__quota__detail"
  );

  await expect(resultado).toContainText(
    /\$\d+[.,]\d{2}/,
    {
      timeout: 30000,
    }
  );

  const texto = await resultado.innerText();

  const valores =
    texto.match(/\$\d+[.,]\d{2}/g) ?? [];

  const cuotaMensual =
    valores[valores.length - 1];

  console.log(
    "Cuota obtenida:",
    cuotaMensual
  );

  return cuotaMensual;
}
}