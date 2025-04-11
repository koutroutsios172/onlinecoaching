// src/trainers/trainer.service.ts
import { Injectable } from '@nestjs/common';
import { Trainer } from './trainers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) {}

  // Get all trainers
  async getAllTrainers(): Promise<Trainer[]> {
    return this.trainerRepository.find();
  }

  // Get trainer by ID
  async getTrainerById(id: number): Promise<Trainer | null> {
    return this.trainerRepository.findOneBy({ id });
  }
}
