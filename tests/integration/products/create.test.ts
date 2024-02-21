import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return status code 201', async function () {
    const body = {
      name: 'produtoX',
      price: "100 peças de ouro",
      userId: 1
    }

    const httpResponse = await chai.request(app).post('/products').send(body);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.haveOwnProperty('id');
    expect(httpResponse.body).to.haveOwnProperty('name');
    expect(httpResponse.body).to.haveOwnProperty('price');
    expect(httpResponse.body).to.haveOwnProperty('userId');
  });
});
