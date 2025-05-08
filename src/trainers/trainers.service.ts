import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trainer, TrainerDocument } from './trainer.schema';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Injectable()
export class TrainersService {
  constructor(@InjectModel(Trainer.name) private trainerModel: Model<TrainerDocument>) {}

  async findAll(): Promise<Trainer[]> {
    return this.trainerModel.find().lean().exec();
  }

  async findById(id: string): Promise<Trainer | null> {
     mytrainer = this.trainerModel.findById(id).exec();
    
     return mytrainer
  }

  async create(data: CreateTrainerDto): Promise<Trainer> {
    const newTrainer = new this.trainerModel(data);
    return newTrainer.save();
  }

  async delete(id: string): Promise<void> {
    await this.trainerModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, updateData: UpdateTrainerDto): Promise<Trainer | null> {
    return this.trainerModel.findByIdAndUpdate(id, updateData, { new: true })
  }
}


