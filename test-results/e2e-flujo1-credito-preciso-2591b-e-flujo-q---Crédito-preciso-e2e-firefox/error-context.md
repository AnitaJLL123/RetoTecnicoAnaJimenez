# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\flujo1-credito-preciso.e2e.spec.ts.ts >> @e2e flujo q - Crédito preciso
- Location: tests\e2e\flujo1-credito-preciso.e2e.spec.ts.ts:15:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#block-pichincha-theme-content iframe').contentFrame().locator('.bp-select-multiple__list-item').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('#block-pichincha-theme-content iframe').contentFrame().locator('.bp-select-multiple__list-item').first()

```

```yaml
- heading "¿Que crédito necesitas?" [level=2]
- paragraph: Selecciona un tipo de crédito
- text: arrow_drop_down
- iframe
```

# Test source

```ts
  1   | import { Page, expect } from "@playwright/test";
  2   | 
  3   | type DatosCredito = {
  4   |   tipoCredito: string;
  5   |   montoDeseado: string;
  6   |   montoVivienda?: string;
  7   |   plazo: string;
  8   | };
  9   | 
  10  | export class SimuladorCreditoPage {
  11  |   constructor(private page: Page) {}
  12  | 
  13  |   private simuladorFrame() {
  14  |     return this.page
  15  |       .locator("#block-pichincha-theme-content iframe")
  16  |       .contentFrame();
  17  |   }
  18  | 
  19  |   async aceptarCookiesSiAparece() {
  20  |     const botonAceptar = this.page.getByRole("button", {
  21  |       name: /accept all cookies/i,
  22  |     });
  23  | 
  24  |     if (await botonAceptar.isVisible({ timeout: 10000 }).catch(() => false)) {
  25  |       await botonAceptar.click();
  26  |     }
  27  |   }
  28  | 
  29  | async limpiarOverlays() {
  30  |   await this.page.evaluate(() => {
  31  |     document.querySelector("#onetrust-consent-sdk")?.remove();
  32  |     document.querySelector("#sticky-navbar-content")?.remove();
  33  |     document.querySelector('nav[aria-label="Enlaces de salto al contenido"]')?.remove();
  34  | 
  35  |     document
  36  |       .querySelectorAll('[id*="onetrust"], [class*="onetrust"], [id*="cookie"], [class*="cookie"]')
  37  |       .forEach((el) => el.remove());
  38  |   });
  39  | }
  40  | 
  41  |   async irAlSimulador() {
  42  |     await this.page.goto("/detalle-producto/simulador-de-credito", {
  43  |       waitUntil: "domcontentloaded",
  44  |       timeout: 60000,
  45  |     });
  46  |     await this.aceptarCookiesSiAparece();
  47  |   }
  48  |   async validarTitulo() {
  49  |     await expect(this.page).toHaveTitle(
  50  |       "Simulador de Crédito - consumo, hipotecario y educativo",
  51  |     );
  52  |   }
  53  | 
  54  |   async completarSimulacion(datos: DatosCredito) {
  55  |   await this.aceptarCookiesSiAparece();
  56  |   await this.limpiarOverlays();
  57  |   await this.seleccionarTipoCredito(datos.tipoCredito);
  58  | 
  59  |   if (datos.montoVivienda) {
  60  |     await this.ingresarMontoVivienda(datos.montoVivienda);
  61  |   }
  62  | 
  63  |   await this.ingresarMontoDeseado(datos.montoDeseado);
  64  |   await this.seleccionarPlazo(datos.plazo);
  65  |   await this.seleccionarAmortizacion();
  66  |   await this.simular();
  67  |   }
  68  | 
  69  |   async seleccionarTipoCredito(tipo: string) {
  70  |   const frame = this.simuladorFrame();
  71  |   await frame
  72  |     .locator("div")
  73  |     .filter({ hasText: /Selecciona un tipo de crédito/i })
  74  |     .nth(2)
  75  |     .click();
  76  | 
  77  |   const opciones = frame.locator(".bp-select-multiple__list-item");
> 78  |   await expect(opciones.first()).toBeVisible({ timeout: 10000 });
      |                                  ^ Error: expect(locator).toBeVisible() failed
  79  |   await opciones
  80  |     .filter({ hasText: new RegExp(tipo, "i") })
  81  |     .click();
  82  |   }
  83  | 
  84  |  async ingresarMontoDeseado(monto: string) {
  85  |   const frame = this.simuladorFrame();
  86  |   await frame
  87  |     .getByRole("textbox")
  88  |     .last()
  89  |     .fill(monto);
  90  | }
  91  | async ingresarMontoVivienda(monto: string) {
  92  |   const frame = this.simuladorFrame();
  93  |   await frame
  94  |     .getByRole("textbox")
  95  |     .first()
  96  |     .fill(monto);
  97  | }
  98  | 
  99  | async seleccionarPlazo(plazo: string) {
  100 |   await this.limpiarOverlays();
  101 | 
  102 |   const frame = this.simuladorFrame();
  103 | 
  104 |   // Validar que el formulario ya cargó el plazo
  105 |   await expect(frame.locator("body")).toContainText(
  106 |     /Selecciona un plazo/i,
  107 |     {
  108 |       timeout: 10000,
  109 |     }
  110 |   );
  111 | 
  112 |   // Combo plazo
  113 |   const comboPlazo = frame
  114 |     .locator(".bp-select-multiple")
  115 |     .filter({ hasText: /Selecciona un plazo/i })
  116 |     .last();
  117 | 
  118 |   await expect(comboPlazo).toBeVisible({
  119 |     timeout: 10000,
  120 |   });
  121 | 
  122 |   await comboPlazo.scrollIntoViewIfNeeded();
  123 | 
  124 |   // Click en área realmente clickeable
  125 |   await comboPlazo
  126 |     .locator(".bp-select-multiple__input-container")
  127 |     .click({ force: true });
  128 | 
  129 |   // Espera pequeña para render dropdown
  130 |   await this.page.waitForTimeout(500);
  131 | 
  132 |   // Opciones
  133 |   const opciones = frame.locator(".bp-select-multiple__list-item");
  134 | 
  135 |   const cantidadOpciones = await opciones.count();
  136 | 
  137 |   console.log("Cantidad opciones plazo:", cantidadOpciones);
  138 | 
  139 |   // Debug completo
  140 |   console.log(
  141 |     "Texto body después abrir plazo:"
  142 |   );
  143 | 
  144 |   console.log(
  145 |     await frame.locator("body").innerText()
  146 |   );
  147 | 
  148 |   // Validación
  149 |   expect(cantidadOpciones).toBeGreaterThan(0);
  150 | 
  151 |   // Seleccionar plazo
  152 |   await opciones
  153 |     .filter({
  154 |       hasText: new RegExp(plazo, "i"),
  155 |     })
  156 |     .first()
  157 |     .click({ force: true });
  158 | 
  159 |   console.log("Plazo seleccionado:", plazo);
  160 | }
  161 | 
  162 | async seleccionarAmortizacion() {
  163 |   const frame = this.simuladorFrame();
  164 | 
  165 |   await frame
  166 |     .locator(".radio-item__input__desciption > .typography")
  167 |     .first()
  168 |     .click({ force: true });
  169 | }
  170 | async simular() {
  171 |   const frame = this.simuladorFrame();
  172 |   const btnSimular = frame.getByRole("button", {name: /simular/i});
  173 |   await expect(btnSimular).toBeVisible({ timeout: 10000 });
  174 |   await expect(btnSimular).toBeEnabled({ timeout: 10000 });
  175 |   await btnSimular.click();
  176 | }
  177 | 
  178 | async validarCuotaMensual() {
```