import { Router } from 'express';
import * as DBController from './controller';
import { checkAuth } from '../utils';

const routes = new Router();

routes.post('/address',checkAuth, DBController.createAddress);



export default routes;
