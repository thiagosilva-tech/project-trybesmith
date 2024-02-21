import { Product } from './Product';

export type User = {
  id: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
  productIds?: Product[];
};

export type UserResponse = {
  username: string,
  productIds: number[],
};
