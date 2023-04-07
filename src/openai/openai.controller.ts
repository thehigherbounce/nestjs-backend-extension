import { Controller, Get, Post, Body } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
    constructor(private openaiService: OpenaiService) {}
    
    @Get()
    async getSummary(): Promise<{ summary: string }> {
        return { summary: await this.openaiService.fetchSummary('test') };
    }

    @Post("summary")
    async summary(@Body('text') text: string): Promise<string> {
        return this.openaiService.fetchSummary(text);
    }
}
