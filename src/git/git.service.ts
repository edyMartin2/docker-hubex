import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Repo, RepoDocument } from './entities/repos.entity';
import { CreateRepoDto } from './dto/create-repo.dto';

//paquetes para la relacion entre usuario y repos
import { userRepos, userReposDocument } from './entities/userRepos.entity';
import { CreateUserReposDto } from './dto/create-userRepos.dto'
import { createNewRepo } from 'src/Interfaces/CreateNewRepo';

/**
 * [Relacion entre usuarios y repos]
 * @param userRepos Modelo 
 * @param data Datos 
 * @returns any
 */
const createRelation = async (userRepos: Model<userReposDocument>, data: CreateUserReposDto): Promise<any> => {
  const RelationShip = new userRepos(data)
  return RelationShip.save()
}

const createRepo = async (repos: Model<RepoDocument>, data: Repo): Promise<any> => {
  const RepoNew = new repos(data)
  return RepoNew.save()
}


@Injectable()
export class GitService {
  constructor(
    @InjectModel(Repo.name) private readonly repo: Model<RepoDocument>,
    @InjectModel(userRepos.name) private readonly userRepo: Model<userReposDocument>,
  ) { }

  async create(RelationShip: createNewRepo) {
    const repoData: RepoDocument = RelationShip.createRepo;
    const relationData_ : CreateUserReposDto = RelationShip.createUserRepos

    const createRepoService = await createRepo(this.repo, repoData).then(res => { return res })
    const IdRepoCreated = createRepoService._id.toString()

    const relationData : CreateUserReposDto= {
      "issueID": IdRepoCreated,
      "userID": "UserIdNewID",
      "level": relationData_.level
    }

    const createRelationService = await createRelation(this.userRepo, relationData).then(res => { return res })
    console.log('respuesta del guardado', createRelationService._id.toString())
    return this.repo.find({});
  }
}
