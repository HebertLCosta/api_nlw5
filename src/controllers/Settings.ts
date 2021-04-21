import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/Setting';

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, userName } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
      chat,
      userName,
    });

    await settingsRepository.save(settings);

    return response.json(settings);
  }
}

export { SettingsController };
