import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const userFound = await UserModel.findByPk(product.userId);

  let responseService: ServiceResponse<Product>;
  if (!userFound) {
    responseService = { status: 'UNPROCESSABLE_ENTITY', data: { message: '"userId" not found' } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product);

  responseService = { status: 'CREATED', data: newProduct.dataValues };

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