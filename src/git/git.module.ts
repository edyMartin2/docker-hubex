import { Module } from '@nestjs/common';
import { GitService } from './git.service';
import { GitController } from './git.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Repo, RepoSchema } from './entities/repos.entity'
import { userRepos, userReposSchema } from './entities/userRepos.entity';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Repo.name, useFactory: () => RepoSchema },
      { name: userRepos.name, useFactory: () => userReposSchema }
    ]),
  ],
  providers: [GitService],
  controllers: [GitController]
})
export class GitModule { }
