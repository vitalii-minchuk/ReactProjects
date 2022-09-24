export type Product = {
  id?: string;
  title: string;
  description: string;
  price: number;
  inCart: boolean;
};

// export type ProductWithoutId = Omit<Product, "id">;
