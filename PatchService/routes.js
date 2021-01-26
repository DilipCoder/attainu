import { Router } from 'express';
import * as PatchController from './controller';
import { checkAuth } from '../utils';

const routes = new Router();

routes.post('/patch',checkAuth, PatchController.patch);



export default routes;
