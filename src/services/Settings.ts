import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/Settings';

interface ISettingsCreate {
  chat: boolean;
  userName: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, userName }: ISettingsCreate) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      userName,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const settings = this.settingsRepository.create({
      chat,
      userName,
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
