// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainersModule } from './trainers/trainers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:password@127.0.0.1:27017/test?authSource=admin'),
    TrainersModule,
  ],
})
export class AppModule {}
