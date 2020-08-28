import express from 'express';
import { createConnection } from 'typeorm';

import routes from './routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }
  private async database(): Promise<void> {
    await createConnection();
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
