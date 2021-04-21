import { Request, Response, Router } from 'express';
import { SettingsController } from './controllers/Settings';

const routes = Router();

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

export { routes };
