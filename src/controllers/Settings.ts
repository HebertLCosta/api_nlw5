import { Request, Response } from 'express';
import { SettingsService } from '../services/Settings';

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, userName } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, userName });

      return response.json(settings);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }
}

export { SettingsController };
