//require assert to confirm test cases
const assert = require('assert');

//require functions from app.js
let app;


/*READ ME
This test should simulate the use of API to consume data and 
push to auth.microapi.dev sucessfully
using the app() in index.js
cmd> npm run test 

Note! this test would not pass until the condition is satisfied, 
modification may still be required. Ref (Gafar_01)*/

describe('POST /login', () => {

   beforeEach(() => {
    app = require('../../server');
  });

  afterEach(async () => {
    await app.close();
  });

  //sample correct JSON data which is in database
  describe('Signing in with a verified email and password', ()=>{
    it('should respond 200', (done)=>{
      request.agent(app)
          .post('/login')
          .send({username:'boyroberto@gmail.com',password:'emirateboy'})
          .expect(200)
          .expect('message', 'Success')
          done();
    });
  });
  //sample incorrect JSON data which is not in database
  it('should respond with 404', (done) => {
    request(app)
      .post('/api/v1/login')
      .send({ username: 'incorrect@gmail.com', password: 'Patch' })
      .expect(404);
  });
});
