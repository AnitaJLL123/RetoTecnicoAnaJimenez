# Playwright Automation Framework – E2E & API Testing

## Objetivo

Este proyecto implementa automatización E2E y API utilizando Playwright, aplicando buenas prácticas de arquitectura, mantenibilidad, reutilización y clean code.

Se cubren:
- Automatización UI E2E
- Automatización API REST
- Validaciones funcionales y no funcionales
- Evidencias y reportes profesionales
- Manejo de escenarios positivos, negativos y edge cases

---

# Tecnologías Utilizadas

| Tecnología | Versión |
|---|---|
| Node.js | v24.15.0 |
| Playwright | v1.60 |
| TypeScript | v2.0.4 |
| Zod | v4.4.3 |

---

# Arquitectura del Proyecto

```txt
tests/
  e2e/
  api/

pages/
api/
  clients/
  schemas/

data/
utils/

playwright.config.ts
README.md
gitignore
package.json
package-lock.json
```

## Descripción de Carpetas

### tests/e2e
Contiene pruebas End to End.

### tests/api
Contiene pruebas de automatización API y E2E

### pages
Implementación Page Object Model para E2E.

### api/clients
Clientes reutilizables para consumo API.

### api/schemas
Validaciones de contrato y estructura.

### data
Datos estáticos y payloads reutilizables.

### utils
Helpers y utilitarios compartidos.

---

# Configuración del Proyecto

## Clonar repositorio
```bash
git clone https://github.com/AnitaJLL123/RetoTecnicoAnaJimenez.git
cd RetoTecnicoAnaJimenez
```
## Instalación

Asegurarte de tener:
node.js Node.js (versión 16 o superior recomendada) https://nodejs.org/en/download
npm o yarn
Verifica:
```bash
node -v
npm -v
```
```bash
npm install
```

## Instalar Playwright
``` bash
npm install -D @playwright/test
```
## Instalar Playwright Browsers

```bash
npx playwright install
```
Esto instalará:

Chromium
Firefox
WebKit

---

# Ejecución de Pruebas

## Ejecutar Todo

```bash
npx playwright test
```

## Ejecutar E2E

```bash
npx playwright test --grep @e2e --headed ##(utilizando tags)
```

## Ejecutar API

```bash
npx playwright test --project=api
npx playwright test --project=api --grep @api ##(utilizando tags)
```

## Ejecutar un archivo específico

```bash
npx playwright test tests/api/products.api.spec.ts
npx playwright test tests/e2e/simulador-credito.e2e.spec.ts
```

---

# Estrategia de Automatización

## E2E

Se implementó:
- Page Object Model (POM)
- Reutilización de componentes
- Separación de responsabilidades
- Manejo de waits y sincronización
- Captura de evidencias automáticas

## API

Se implementó:
- API Clients reutilizables
- Validación de status codes
- Validación de estructura JSON
- Validación de tipos de datos
- Manejo de escenarios negativos
- Edge cases

---

# Casos Implementados

## API Testing – Fake Store API

### Escenarios Positivos
- Obtener producto específico
- Listar productos por categoría
- Crear producto exitosamente
- Actualizar producto completo

### Escenarios Negativos
- Producto no encontrado
- Categoría inválida
- Crear producto con payload vacío
- Validación de límites

---

# Reportes de Ejecución

## Reporte HTML

Generado automáticamente por Playwright:

```bash
npx playwright show-report
```

Ubicación:

```txt
playwright-report/
```

## Reporte JSON

Ubicación:

```txt
reports/results.json
```

---

# Evidencias

## Screenshots
- Captura automática en fallos
- Capturas en pasos críticos (opcional)

## Videos
- Generación automática para debugging
- Retención en pruebas fallidas

## Traces
- Habilitados para debugging avanzado

Abrir trace:

```bash
npx playwright show-trace trace.zip
```

---

# Validaciones Implementadas

## API

- Status codes
- Response body
- Tipos de datos
- Estructura JSON
- Validación de arrays
- Validación de contratos
- Validación de límites

## E2E

- Visibilidad de elementos
- Navegación
- Flujos completos
- Estados UI
- Assertions funcionales

---

# Hallazgos

## Fake Store API

Durante la automatización se identificaron comportamientos particulares de la API mock:

### POST /products
La API puede responder:
- 200
- 201

Ambos fueron considerados válidos debido al comportamiento mock del servicio.

### Payloads inválidos
La API permite crear productos con payload vacío sin validaciones estrictas.

Esto se documenta como hallazgo funcional.

### Categorías inexistentes
En algunos casos retorna:
- 200 con array vacío
en lugar de 404.

---

# Principios Aplicados

- Clean Code
- SOLID
- Reutilización
- Escalabilidad
- Separación de responsabilidades
- Mantenibilidad

---

# Conclusiones

Se implementó un framework reutilizable para pruebas E2E y API utilizando Playwright y TypeScript.

La solución permite:
- Escalabilidad
- Fácil mantenimiento
- Separación de capas
- Reutilización de componentes
- Integración CI/CD futura

Además, se documentaron los comportamientos reales encontrados en la Fake Store API, adaptando las validaciones para hacer las pruebas más robustas y representativas.