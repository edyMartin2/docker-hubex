import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ValidateUser } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateTokenDto } from './dto/create-token.dto';
import axios from 'axios';
import { encode } from 'src/crypt/cryptPassword';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userName')
  async findOne(@Param('userName') userName: string) {
    var findOne = this.userService.findOne(userName);
    let users = await findOne.then((res) => {
      return res;
    });

    let forTokenise = users[0] ? `${users[0].userName}::${users[0].password}::${Date.now()}` : '';
  

    let tokenDto = {
      userId: users[0] ? users[0]._id : 0,
      token: forTokenise,
    };

    let tokenize = this.userService.tokenize(tokenDto);
    let tokens = users[0] ? await tokenize.then((res) => { return res; }) : null;

    return {
      result: {
        user: users[0] ? users[0] : [],
        token: tokens !== null ? encode(tokens.token) : {},
      },
      status: tokens !== null ? 200 : 500
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get('/validate/status')
  async validate(@Body() validateUser: ValidateUser) {
    const response = await this.userService.validate(validateUser).then(res => { return res });
    const result = response[0] ? response[0] : null

    return {
      results: result !== null ? result : {},
      status: result !== null ? 500 : 200
    }
  }
}
