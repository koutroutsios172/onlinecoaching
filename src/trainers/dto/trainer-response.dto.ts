import { ApiProperty } from '@nestjs/swagger';

export class TrainerResponseDto {
 @ApiProperty()
  name: string;
  
  @ApiProperty()
  age: number;

  @ApiProperty()
  description: string;
}
