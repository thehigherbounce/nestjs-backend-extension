import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Highlight {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  summary: string;

  @Prop({ required: true })
  url: string;
}

export const HighlightSchema = SchemaFactory.createForClass(Highlight);
export type HighlightDocument = Highlight & Document;
