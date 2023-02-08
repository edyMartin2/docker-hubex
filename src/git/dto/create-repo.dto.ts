import { IsDefined, IsNumber, IsString } from 'class-validator';

export class CreateRepoDto {
  @IsString()
  @IsDefined()
  repoUrl: string;

  @IsString()
  @IsDefined()
  descriptionIssue: string;
}