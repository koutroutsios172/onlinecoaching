import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TrainersModule } from './trainers/trainers.module'; // Your TrainersModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: '127.0.0.1',
      port: 5432,
      username: 'gymbro_user', // Χρησιμοποιούμε τον ίδιο χρήστη που έχεις στο Docker Compose
      password: 'strongpass123', // Ο ίδιος κωδικός που έχεις στο Docker Compose
      database: 'GymBro', // Η βάση δεδομένων που χρησιμοποιείται από τον PostgreSQL
      schema: 'public',
      entities: [],
      logging: true,
    }),
    
    UsersModule,
    TrainersModule, // Import the TrainersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
