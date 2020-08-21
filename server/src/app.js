import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import logger from './logger';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';

import {authentication}  from './authentication';

import sequelize from './sequelize';

const app = express(feathers());


app.configure(configuration());
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));

app.use('/', express.static(app.get('public')));

app.configure(express.rest());

app.configure(sequelize);

app.configure(middleware);
app.configure(authentication);

app.configure(services);


app.use(express.notFound());
app.use(
  express.errorHandler({
    logger
  })
);

app.hooks(appHooks);

export default app;
