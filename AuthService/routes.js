import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.post('/login', UserController.login);



export default routes;
