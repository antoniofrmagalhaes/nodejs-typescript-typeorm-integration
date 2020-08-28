import 'reflect-metadata';
import './container';
import appConfig from './core/config';
import app from './core/app';

app.listen(appConfig.port, () =>
  console.log('Api running on port %s.', appConfig.port),
);
