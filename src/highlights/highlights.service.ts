import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight, HighlightDocument } from './schemas/highlight.schema';
import { CreateHighlightDto } from './dto/create-highlight.dto';
import { GetHighlightsDto } from './dto/get-highlights.dto';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectModel(Highlight.name) private highlightModel: Model<HighlightDocument>,
  ) {}

  async create(createHighlightDto: CreateHighlightDto): Promise<void> {
    const createdHighlight = new this.highlightModel(createHighlightDto);
    await createdHighlight.save();
  }

  async findAll(getHighlightsDto: GetHighlightsDto): Promise<Highlight[]> {
    return this.highlightModel.find({ url: getHighlightsDto.url }).exec();
  }
}
