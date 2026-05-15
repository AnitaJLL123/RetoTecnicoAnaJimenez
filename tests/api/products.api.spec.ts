import { test, expect } from '@playwright/test';
import { ProductClient } from '../../api/clients/product.client';
import { ProductSchema, ProductListSchema } from '../../api/schemas/product.schema';
import { validProduct, updatedProduct } from '../../api/data/products.data';

test.describe('@api Fake Store API - Products', () => {
  let productClient: ProductClient;

  test.beforeEach(({ request }) => {
    productClient = new ProductClient(request);
  });

  test('@api Caso 1: Obtener producto específico', async () => {
    const response = await productClient.getById(1);
    expect(response.status()).toBe(200);

    const body = await response.json();
    ProductSchema.parse(body);

    expect(body.id).toBe(1);
    expect(typeof body.price).toBe('number');
    expect(body.rating).toHaveProperty('rate');
    expect(body.rating).toHaveProperty('count');
  });

  test('@api Caso 2: Listar productos por categoría electronics', async () => {
    const response = await productClient.getByCategory('electronics');
    expect(response.status()).toBe(200);

    const body = await response.json();
    ProductListSchema.parse(body);

    expect(body.length).toBeGreaterThan(0);
    for (const product of body) {
      expect(product.category).toBe('electronics');
    }
  });

  test('@api Caso 3: Crear producto exitosamente', async () => {
    const response = await productClient.create(validProduct);
    expect([200, 201]).toContain(response.status());

    const body = await response.json();

    expect(body.id).toBeDefined();
    expect(body.title).toBe(validProduct.title);
    expect(body.price).toBe(validProduct.price);
    expect(body.description).toBe(validProduct.description);
    expect(body.category).toBe(validProduct.category);
    expect(body.image).toBe(validProduct.image);
  });

  test('@api Caso 4: Actualizar producto completo', async () => {
    const response = await productClient.update(1, updatedProduct);
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe(updatedProduct.title);
    expect(body.price).toBe(updatedProduct.price);
    expect(body.description).toBe(updatedProduct.description);
    expect(body.category).toBe(updatedProduct.category);
    expect(body.image).toBe(updatedProduct.image);
  });

  test('@api Caso 5: Producto no encontrado', async () => {
    const response = await productClient.getById(999999);

    // Fake Store API puede responder 200 con null en lugar de 404.
    expect([200, 404]).toContain(response.status());

    const text = await response.text();
    if (response.status() === 200) {
      expect(text === 'null' || text === '').toBeTruthy();
    }
  });

  test('@api Caso 6: Categoría inválida', async () => {
    const response = await productClient.getByCategory('categoria-inexistente');

    // Comportamiento esperado en esta API mock: 200 con array vacío.
    expect([200, 404]).toContain(response.status());

    if (response.status() === 200) {
      const body = await response.json();
      expect(Array.isArray(body)).toBeTruthy();
      expect(body.length).toBe(0);
    }
  });

  test('@api Caso 7: Crear producto con payload vacío', async () => {
    const response = await productClient.create({});

    // API mock puede aceptar datos inválidos; se documenta como hallazgo.
    expect([200, 201, 400, 422]).toContain(response.status());

    const body = await response.json().catch(() => ({}));
    expect(body).toBeDefined();
  });

  test('@api Caso 8: Validación de límite de productos', async () => {
    const response = await productClient.getWithLimit(5);
    expect(response.status()).toBe(200);

    const body = await response.json();
    ProductListSchema.parse(body);

    expect(body.length).toBeLessThanOrEqual(5);
  });
});