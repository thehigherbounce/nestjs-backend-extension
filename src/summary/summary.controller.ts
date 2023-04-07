import { Controller, Post, Body } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private summaryService: SummaryService) {}

  @Post()
  async summarize(@Body('text') text: string): Promise<string> {
    return this.summaryService.summarize(text);
  }
}
