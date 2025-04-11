
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:"trainer"})
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  number: string;

  @Column()
  bio: string;
}
