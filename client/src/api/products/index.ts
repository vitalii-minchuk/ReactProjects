export const getProducts = async () => {
  const response = await fetch(
    "https://632e01bab37236d2ebe4bebc.mockapi.io/products"
  );

  return await response.json();
};
