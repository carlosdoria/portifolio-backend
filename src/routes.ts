import { Router } from 'express';
import EmailController from './controllers/emailController'

const routes = Router();

const emailController = new EmailController();

routes.post('/send', emailController.postEmail)

export default routes;
