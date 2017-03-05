import hello from 'hellojs';

import request from 'superagent';

const SERVER_URL = 'http://localhost:8080';
const FACEBOOK_CLIENT_ID = '700042113498773';

let user = init();

hello.init({
  facebook: FACEBOOK_CLIENT_ID,
})

export default {
  isAuthenticated,
  login: () => {
    hello('facebook')
      .login()
      .then(response => {
        request
          .post(`${SERVER_URL}/auth/facebook`)
          .send({
            socialToken: response.authResponse.access_token,
          })
          .set('Accept', 'application/json')
          .then(
          result => {
            if (result.body && result.body.jwt) {
              localStorage.setItem('user', JSON.stringify(result.body))
            }
            return result.body;
          }
          )
      });
  },
  test: () => {
    
    if (!isAuthenticated()) {
      console.error("not authenticated");
      return Promise.reject('Not authenticated');
    }
    
    return request.get(`${SERVER_URL}/api/category?jwt=${user.jwt}`)
      .end();
  }


};


function init() {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    return JSON.parse(userStr);
  }
}

function isAuthenticated() {
  return !!user.jwt;
}
