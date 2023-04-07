import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { CreateHighlightDto } from './dto/create-highlight.dto';
import { GetHighlightsDto } from './dto/get-highlights.dto';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Post()
  create(@Body() createHighlightDto: CreateHighlightDto): Promise<void> {
    return this.highlightsService.create(createHighlightDto);
  }

  @Get()
  findAll(@Query() getHighlightsDto: GetHighlightsDto): Promise<any[]> {
    return this.highlightsService.findAll(getHighlightsDto);
  }
}