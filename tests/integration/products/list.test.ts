import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';
import app from '../../../src/app';



chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return all products', async function () {
    const mockFindAllReturn = ProductModel.bulkBuild(productMock.existingProducts);
 
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);
 
    const httpResponse = await chai.request(app).get('/products').send(productMock.existingProducts);
 
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productMock.existingProducts);
 
  })
});
