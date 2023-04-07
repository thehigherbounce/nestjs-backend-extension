import { Module } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { HighlightsController } from './highlights.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './schemas/highlight.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Highlight.name, schema: HighlightSchema }]),
  ],
  providers: [HighlightsService],
  controllers: [HighlightsController],
})
export class HighlightsModule {}
