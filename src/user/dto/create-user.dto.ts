import { IsDefined, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  name: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  email: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  password: string;

  @IsString()
  @IsDefined()
  @ApiProperty()
  userName: string

  @IsString()
  @IsDefined()
  @ApiProperty()
  gitToken: string
}

export class ValidateUser {
  @IsString()
  userName: string
}