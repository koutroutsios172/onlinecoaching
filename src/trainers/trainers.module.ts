// src/trainers/trainers.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { Trainer, TrainerSchema } from './trainer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Trainer.name, schema: TrainerSchema }])],
  controllers: [TrainersController],
  providers: [TrainersService],
})
export class TrainersModule {}

