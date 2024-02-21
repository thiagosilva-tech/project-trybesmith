import UserModel from '../database/models/user.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { UserResponse } from '../types/User';

async function findAll(): Promise<ServiceResponse<UserResponse[]>> {
  const users = await UserModel.findAll({
    attributes: ['username'],
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });  
  const tranformedUsers: UserResponse[] = users.map((user) => ({ 
    username: user.dataValues.username,
    productIds: user.dataValues.productIds?.map((product) => product.id) || [],
  }));  
  const responseService: ServiceResponse<UserResponse[]> = {
    status: 'SUCCESSFUL',
    data: tranformedUsers,
  };
  return responseService;
}

export default {
  findAll,
};
