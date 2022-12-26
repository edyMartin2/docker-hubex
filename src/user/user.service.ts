import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { CreateUserDto, ValidateUser } from './dto/create-user.dto';

import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Token, TokenDocument } from './entities/token.entity';
import { CreateTokenDto } from './dto/create-token.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly user: Model<UserDocument>,
    @InjectModel(Token.name) private readonly token: Model<TokenDocument>,
  ) { }
  async create(createUserDto: CreateUserDto): Promise<User | string> {
    const User = new this.user(createUserDto);
    return await User.save();
  }

  findAll() {
    return this.user.find({});
  }

  async findOne(data: string) {
    var params = data.split('&')
    let user = await this.user.find({ userName: params[0], password: params[1] });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async tokenize(createTokenDto: CreateTokenDto) {
    const Token = new this.token(createTokenDto);
    return await Token.save();
  }

  async validate(validateUser: ValidateUser) : Promise<User | any>{
    
    let user = await this.user.find({ userName: validateUser.userName });
    return user;
  }
}
