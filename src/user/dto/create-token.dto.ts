import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateTokenDto {
  @IsString()
  @IsDefined()
  userId: string;

  @IsString()
  @IsDefined()

  token: string;
}
