import ProductModel from '../database/models/product.model';
import { Product, ProductInputFields } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: ProductInputFields): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  const responseService:
  ServiceResponse<Product> = { status: 'CREATED', data: newProduct.dataValues };

  return responseService;
}

async function findAll(): Promise<ServiceResponse<Product[]>> {
  const products = await ProductModel.findAll();
 
  const responseService:
  ServiceResponse<Product[]> = { 
    status: 'SUCCESSFUL', 
    data: products.map((product) => product.toJSON()), 
  };
 
  return responseService;
}

export default {
  createProduct,
  findAll,
};