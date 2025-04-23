// src/trainers/trainer.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { Trainer } from './trainers.entity';

@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainerService: TrainersService) {}

  @Get()
  async getAllTrainers(): Promise<Trainer[] | null> {
    return this.trainerService.getAllTrainers();
  }

  @Get(':id')
  async getTrainerById(@Param('id') id: number): Promise<Trainer> {
    const trainer = await this.trainerService.getTrainerById(id);

    // Check if the trainer was found
    if (!trainer) {
      throw new NotFoundException(`Trainer with ID ${id} not found`);
    }

    return trainer; // Now this won't throw an error, as we've ensured trainer is not null.
  }
}

