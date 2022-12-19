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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateTokenDto } from './dto/create-token.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
    let tokenDto = {
      userId: users[0]._id,
      token: '',
    };

    let tokenize = this.userService.tokenize(tokenDto);
    let tokens = await tokenize.then((res) => {
      return res;
    });
    return {
      users: users,
      tokens: tokens,
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
}
