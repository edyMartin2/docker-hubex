
import { Controller,Get, Post } from '@nestjs/common';
import { GitService } from './git.service';
import {Body} from '@nestjs/common'
import { Octokit } from "octokit";
import { CreateUserReposDto } from './dto/create-userRepos.dto'
import { CreateRepoDto } from './dto/create-repo.dto';
import { createNewRepo } from 'src/Interfaces/CreateNewRepo'; 


@Controller('git')
export class GitController {
    constructor(private readonly gitService:GitService){}

    @Post()
    creaet(@Body() createNewRepo: createNewRepo ){
        this.gitService.create(createNewRepo)
        return ""
    }
}
