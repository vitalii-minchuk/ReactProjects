import { Product } from "./types";

const BASE_URL = "https://632e01bab37236d2ebe4bebc.mockapi.io/";

export const API = {
  getProducts: async () => {
    return await fetch(`${BASE_URL}/products`);
  },
  deleteProduct: async (id: string) => {
    return await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
  },
  createProduct: async (product: Product) => {
    console.log(product);
    return await fetch(`${BASE_URL}/products`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  },
  updateProduct: async (product: Product) => {
    console.log(product);
    return await fetch(`${BASE_URL}/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  },
};
