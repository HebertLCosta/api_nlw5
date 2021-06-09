import { Request, Response } from "express";
import { SettingsService } from "../services/Settings";

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

  async findByUserName(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUserName(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return response.json(settings);
  }
}

export { SettingsController };
