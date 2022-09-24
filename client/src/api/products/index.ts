const BASE_URL = "https://632e01bab37236d2ebe4bebc.mockapi.io/";

export const API = {
  getProducts: async () => {
    return await fetch(`${BASE_URL}/products`);
  },
  deleteProduct: async (id: string) => {
    return await fetch(`${BASE_URL}/products/:${id}`, {
      method: "DELETE",
    });
  },
  // fetchCredits: async (id: number): Promise<Credits> => {
  //   const response = await fetch(CREDITS_BASE_URL(id));

  //   return await response.json();
  // },
};
