import { Router } from 'express';
import * as PatchController from './controller';
import { checkAuth } from '../utils';

const routes = new Router();

routes.patch('/patch',checkAuth, PatchController.patch);



export default routes;
