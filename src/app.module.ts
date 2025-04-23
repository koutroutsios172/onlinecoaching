import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainersModule } from './trainers/trainers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postAdmin',
      password: 'password',
      database: 'gymbro',
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      // This is our Second DB Config
      name: 'mongo', // Unique name
      type: 'mongodb',
      url: 'mongodb://admin:password@127.0.0.1:27017/gymbro?authSource=admin',
      logging: true,
      autoLoadEntities: true,
    }),
    MongooseModule.forRoot('mongodb://admin:password@127.0.0.1:27017/gymbro?authSource=admin'),
    UsersModule,
    TrainersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
