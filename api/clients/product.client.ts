import { APIRequestContext } from '@playwright/test';

export class ProductClient {
  constructor(private request: APIRequestContext) {}

  getById(id: number) {
    return this.request.get(`/products/${id}`);
  }

  getByCategory(category: string) {
    return this.request.get(`/products/category/${category}`);
  }

  create(payload: object) {
    return this.request.post('/products', { data: payload });
  }

  update(id: number, payload: object) {
    return this.request.put(`/products/${id}`, { data: payload });
  }

  getWithLimit(limit: number) {
    return this.request.get(`/products?limit=${limit}`);
  }
}