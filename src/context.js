// @flow
import Pryv from 'pryv';
import config from './config.js';
require('./business/PryvServiceExtension'); // patch Pryv lib

type QueryParameters = {
  pryvServiceInfoUrl: string,
}

class Context {
  appId: string;
  Pryv: Pryv;
  pryvService: Pryv.Service;
  initialized: boolean;
  conn: Pryv.Connection;

  constructor (queryParams: QueryParameters) {
    queryParams = queryParams || {};
    this.appId = config.appId;
    const serviceInfoUrl = queryParams.pryvServiceInfoUrl || config.pryvServiceInfoUrl;
    this.pryvService = new Pryv.Service(serviceInfoUrl);
    this.initialized = false;
  }

  isConnected () {
    return this.conn !== null;
  }

  async init () {
    await this.pryvService.info();
  }
}

export default Context;
