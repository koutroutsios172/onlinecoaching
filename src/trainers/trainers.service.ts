
import { Injectable } from '@nestjs/common';
import { Trainer } from './trainers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrainersService {
  constructor() {}

  // Get all trainers
   getAllTrainers(): Promise<Trainer[] | null> | null {
    {
      return null;
    }
  }
  // Get trainer by email

  // Get trainer by ID
  getTrainerById(id: number): Promise<Trainer | null> | null {
    return null;
  }
}
