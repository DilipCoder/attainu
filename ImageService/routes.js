import { Router } from 'express';
import * as ImageController from './controller';
import { checkAuth } from '../utils';

const routes = new Router();

routes.post('/thumbnail',checkAuth, ImageController.generateThumbnail);



export default routes;
