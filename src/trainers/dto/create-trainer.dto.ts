import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainerDto {
  @ApiProperty({ example: 'John', description: 'First name' })
  name: string;

  @ApiProperty({ example: '35', description: 'age:' })
  age: number;

  @ApiProperty({ example: 'bodybuilder', description: 'description' })
  description: string;
}
