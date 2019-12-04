import {Router} from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';


routes.get('/users',UserController.store);

export default routes;

