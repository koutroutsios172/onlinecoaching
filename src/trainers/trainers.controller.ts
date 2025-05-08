import { Controller, Get, Post, Body, Param, Delete, Patch, NotFoundException } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { TrainerResponseDto } from './dto/trainer-response.dto';

@ApiTags('Trainers')
@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all trainers', type: [TrainerResponseDto] })
  async getAll(): Promise<TrainerResponseDto[]> {
    const trainers = await this.trainersService.findAll();
    return trainers.map(trainer => ({
      name: trainer.name,
      age: trainer.age,
      description: trainer.description,
    }));
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 200, description: 'Get a trainer by ID', type: TrainerResponseDto })
  async getById(@Param('id') id: string): Promise<TrainerResponseDto> {
    const trainer = await this.trainersService.findById(id);
    if (!trainer) {
      throw new NotFoundException(`Trainer with id ${id} not found`);
    }
    return {
      name: trainer.name,
      age: trainer.age,
      description: trainer.description,
    };
  }

  @Post()
  @ApiBody({ type: CreateTrainerDto })
  @ApiResponse({ status: 201, description: 'Create a trainer', type: TrainerResponseDto })
  async create(@Body() body: CreateTrainerDto): Promise<TrainerResponseDto> {
    const trainer = await this.trainersService.create(body);
    return {
      name: trainer.name,
      age: trainer.age,
      description: trainer.description,
    };
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 200, description: 'Delete a trainer' })
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.trainersService.delete(id);
    return { message: `Trainer with id ${id} deleted successfully.` };
  }

  @Patch(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiBody({ type: UpdateTrainerDto })
  @ApiResponse({ status: 200, description: 'Update a trainer', type: TrainerResponseDto })
  async update(@Param('id') id: string, @Body() updateData: UpdateTrainerDto): Promise<TrainerResponseDto> {
  const trainer = await this.trainersService.update(id, updateData);
    if (!trainer) {
      // Αν το update δεν επιστρέψει trainer, τότε ρίχνουμε την εξαίρεση NotFound
      throw new NotFoundException(`Trainer with id ${id} not found`);
    }
    return {
      name: trainer.name,
      age: trainer.age,
      description: trainer.description,
    };
  }
}







