import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TrainerDocument = HydratedDocument<Trainer>;

@Schema()
export class Trainer {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  description: string;
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);
