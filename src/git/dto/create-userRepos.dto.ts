import { IsDefined, IsNumber, IsString } from 'class-validator'

export class CreateUserReposDto {
    @IsString()
    @IsDefined()
    issueID: string;

    @IsString()
    @IsDefined()
    userID: string;

    @IsNumber()
    @IsDefined()
    level: number
}