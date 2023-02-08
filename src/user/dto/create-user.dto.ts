import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  password: string;

  @IsString()
  @IsDefined()
  userName: string

  @IsString()
  @IsDefined()
  gitToken: string
}

export class ValidateUser {
  @IsString()
  userName: string
}