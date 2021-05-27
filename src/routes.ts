import { Router } from 'express';
import { MessagesController } from './controllers/Messages';
import { SettingsController } from './controllers/Settings';
import { UsersController } from './controllers/Users';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);

routes.get('/messages/:id', messagesController.showByUser);
routes.post('/messages', messagesController.create);

export { routes };
