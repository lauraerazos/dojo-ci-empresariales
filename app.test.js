const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); //Arrange

test('gets the add endpoint', async done => {
    const response = await request.get('/add?value1=2&value2=5'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe(7);
    done();
});

test('gets the subtract endpoint', async done => {
    const response = await request.get('/subtract?value1=5&value2=4'); //Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).toBe(1);
    done();
});