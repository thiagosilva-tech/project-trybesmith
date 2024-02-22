import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app'
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao não receber um e-mail, retorne um erro', async function () {
    // Arrange
    const body = { password: 'ch4ng3m3' }

    // Act
    const httpResponse = await chai.request(app).post('/login').send(body);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: "\"username\" and \"password\" are required" });
});

it('ao não receber uma senha, retorne um erro', async function () {
    // Arrange
    const body = { username: 'user1' };

    // Act
    const httpResponse = await chai.request(app).post('/login').send(body);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"username\" and \"password\" are required" });
});

it('ao receber um e-mail inexistente, retorne um erro', async function () {
    // Arrange
    const body = { username: 'notfound', password: 'ch4ng3m3' };
    sinon.stub(UserModel, 'findOne').resolves(null);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(body);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ "message": "Username or password invalid" });
});

it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
    // Arrange
    const body = { username: 'user1', password: 'wrong_password' };

    const existingUser = {
      id: 1,
      username: 'user1',
      vocation: 'user',
      level: 1,
      password: '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW',
  };

    const mockFindOneReturn = UserModel.build(existingUser);
    /* Aqui utilizamos o valor de mockFindOneReturn pois ele é compatível com o retorno da função `findOne()` */
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(body);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ "message": "Username or password invalid" });
});

it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
    // Arrange
    const httpRequestBody = { username: 'user1', password: 'ch4ng3m3' };
    const existingUser = {
      id: 1,
      username: 'user1',
      vocation: 'user',
      level: 1,
      password: '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW',
  };

    const mockFindOneReturn = UserModel.build(existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
});
});
