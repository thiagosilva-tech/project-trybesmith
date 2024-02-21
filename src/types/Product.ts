import { Optional } from 'sequelize';

export type Product = {
  id: number;
  name: string;
  price: string;
  userId: number;
};

export type ProductInputFields = Optional<Product, 'id'>;