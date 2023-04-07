import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private isEnabled = false;

  async getEnabled(): Promise<boolean> {
    return this.isEnabled;
  }

  async toggleEnabled(): Promise<boolean> {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }
}
