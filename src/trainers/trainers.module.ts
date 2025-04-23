// src/trainers/trainer.module.ts
import { Module } from '@nestjs/common';
import { TrainersController } from './trainers.controller';
import { TrainersService } from './trainers.service';
// import { Trainer } from './trainer.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerSchema, Trainer } from './trainer.schema';

@Module({
  imports: [ 
  //TypeOrmModule.forFeature([Trainer],'mongo'),
  MongooseModule.forFeature([{ name: Trainer.name, schema: TrainerSchema }])],
  controllers: [TrainersController],
  providers: [TrainersService],
})
export class TrainersModule {}
