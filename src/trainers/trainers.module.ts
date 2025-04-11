// src/trainers/trainer.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerController } from './trainers.controller';
import { TrainerService } from './trainers.service';
import { Trainer } from './trainers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trainer])],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainersModule {}
