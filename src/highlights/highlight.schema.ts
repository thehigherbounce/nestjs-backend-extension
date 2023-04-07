import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HighlightDocument = Highlight & Document;

@Schema()
export class Highlight {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  summary: string;

  @Prop()
  url: string;

  @Prop()
  userId?: string; // For Stretch Goal: User authentication

  @Prop([String])
  tags?: string[]; // For Stretch Goal: Tagging system
}

export const HighlightSchema = SchemaFactory.createForClass(Highlight);
