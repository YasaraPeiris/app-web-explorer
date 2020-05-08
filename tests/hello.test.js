/* eslint-disable jest/expect-expect */

import { Selector, RequestMock, RequestLogger } from 'testcafe';
import config from '../src/config.js';

const loginParams = {
  username: 'testuser',
  password: 'testpassword',
  appId: config.appId,
};
const personalToken = 'personalToken';

const initEndpoint = config.pryvServiceInfoUrl;
const loginEndpoint = `https://${loginParams.username}.pryv.me/auth/login`;

// ---------- Requests loggers ----------

const loginLogger = RequestLogger(loginEndpoint, {
  logRequestBody: true,
  stringifyRequestBody: true,
});

// ---------- Requests mocks ----------

const loginMock = RequestMock()
  .onRequestTo(loginEndpoint)
  .respond({ token: personalToken }, 200, { 'Access-Control-Allow-Origin': '*' });

fixture('Hello test')
  .page('https://l.rec.la:8080/#/hello')
  .requestHooks(loginLogger, loginMock);

test('Login', async testController => {
  await testController
    // Catch eventual unexpected errors that pop as window.alert
    .setNativeDialogHandler((type, text, url) => {
      throw new Error(text);
    })
    // Fill the login form
    .typeText('#username', loginParams.username)
    .typeText('#password', loginParams.password)
    .click('#submitButton')
    // Login call was performed
    .expect(loginLogger.contains(record =>
      record.request.method === 'post' &&
      record.request.body.includes(JSON.stringify(loginParams)),
    )).ok()
    .expect(Selector('#alert').innerText).contains('Login successful.');
});
