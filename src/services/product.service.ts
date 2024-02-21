import ProductModel from '../database/models/product.model';
import { Product, ProductInputFields } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: ProductInputFields): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  const responseService:
  ServiceResponse<Product> = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
}

export default {
  createProduct,
};