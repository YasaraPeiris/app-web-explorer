// @flow
const request = require('superagent');

class Pryv {
  serviceInfoUrl: string;
  apiUrl: string;
  apiEndpoint: (string, string) => URL;

  constructor (serviceInfoUrl: string) {
    this.serviceInfoUrl = serviceInfoUrl;
  }

  async init (): Promise<void> {
    const res = await request
      .get(this.serviceInfoUrl);
    this.apiUrl = res.body.api;
    this.apiEndpoint = (username, path) => {
      return new URL(
        path || '',
        this.apiUrl.replace('{username}', username),
      );
    };
  }

  async login (username: string, password: string, appId: string): Promise<Object> {
    const res = await request
      .post(this.apiEndpoint(username, '/auth/login'))
      .send({
        username: username,
        password: password,
        appId: appId,
      });
    return res.body;
  }
}

module.exports = Pryv;
