import { Page, expect } from "@playwright/test";

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

  async creditoPreciso() {
    await this.aceptarCookiesSiAparece();
    await this.limpiarOverlays();

    const frameElement = this.page.locator(
      "#block-pichincha-theme-content iframe",
    );

    await frameElement.scrollIntoViewIfNeeded();
    const frame = this.simuladorFrame();

    await frame
      .locator("div")
      .filter({ hasText: /Selecciona un tipo de crédito/i })
      .nth(2)
      .click();

    //await frame.locator('#undefined-item-0').click({force: true});

    // Esperar opciones
    const opcionesCredito = frame.locator(".bp-select-multiple__list-item");
    await expect(opcionesCredito.first()).toBeVisible({ timeout: 30000 });
    // Debug: ver opciones reales
    console.log(await opcionesCredito.allTextContents());

    // Seleccionar Crédito Preciso
    await opcionesCredito.filter({ hasText: /PRECISO/i }).click();

    //Monto
    await frame.getByRole("textbox", { name: "0" }).fill("3000");

    //Plazo
    await frame.getByText(/Selecciona un plazo/i).click();

    const opcionesPlazo = frame.locator(".bp-select-multiple__list-item");
    await expect(opcionesPlazo.first()).toBeVisible({ timeout: 10000 });
    console.log("Plazos:", await opcionesPlazo.allTextContents());

    await opcionesPlazo
      .filter({ hasText: /6 meses/i })
      .first()
      .click();

    await frame
      .locator(".radio-item__input__desciption > .typography")
      .first()
      .click();

    const btnSimular = frame.getByRole("button", { name: /simular/i });

    await expect(btnSimular).toBeVisible({ timeout: 10000 });
    await expect(btnSimular).toBeEnabled({ timeout: 10000 });

    await btnSimular.scrollIntoViewIfNeeded();

    await btnSimular.click();

    console.log("Click en Simular ejecutado");

    const resultado = frame.locator(".simulation-container__quota__detail");

    //1

    await expect(resultado).toContainText(/\$\d+[.,]\d{2}/, {
      timeout: 30000,
    });

    // Capturar valores
    const textoResultado = await resultado.innerText();
    const valores = textoResultado.match(/\$\d+[.,]\d{2}/g) ?? [];

    console.log("Valores encontrados:", valores);

    // Tomar el último (cuota mensual)
    const cuotaMensual = valores[valores.length - 1];

    console.log("Cuota mensual:", cuotaMensual);

    // Validación
    expect(cuotaMensual).toMatch(/\$\d+[.,]\d{2}/);

    // 2. Validar información de tasas de interés
    await expect(
      resultado.getByText(/tasa de interés referencial/i),
    ).toBeVisible();

    await expect(resultado.getByText(/\d+[.,]\d{2}%|\d+%/)).toBeVisible();

    // 3. Validar tabla de amortización
    await frame
      .getByRole("button", { name: /ver tabla de amortización/i })
      .click();

    await expect(frame.locator(".modal_header")).toBeVisible();
  }
}
