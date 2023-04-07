import { Controller, Get, Put } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingService: SettingsService) {}

    @Get('enabled')
    async isEnabled(): Promise<{ enabled: boolean }> {
        return { enabled: await this.settingService.getEnabled() };
    }

    @Put('toggle')
    async toggleEnabled(): Promise<{ enabled: boolean }> {
        return { enabled: await this.settingService.toggleEnabled() };
    }
}
