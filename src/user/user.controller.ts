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
import { SignIn } from './types/User';
// import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('user')
// @ApiTags("User")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Get()
  // @ApiOperation({ summary: 'Resumen de este endpoint' })
  // @ApiResponse({ status: 200, description: 'Descripción de la respuesta'})
  findAll() {
    return this.userService.findAll();
  }

  @Post('/sign')
  async findOne(@Body() SingIn: SignIn) {
    console.log('Body::request::findanuser::', SingIn)

    var findOne = this.userService.findOne(SingIn);
    
    let users = await findOne.then((res) => {
      console.log('respuesta de busqueda:::', res)
      return res;
    });

    let forTokenise = users[0] ? encode(`${users[0].userName}::${new Date().toISOString()}`) : '';
  

    let tokenDto = {
      userId: users[0] ? users[0]._id : 0,
      token: forTokenise,
    };

    let tokenize = this.userService.tokenize(tokenDto);
    let tokens = users[0] ? await tokenize.then((res) => { return res; }) : null;

    return {
      result: {
        token: tokens !== null ? String(`token_${tokens.token}`): {},
      },
      status: tokens !== null ? 200 : 500
    };
  }

  /**
   * 
   * @param id UUID de usuario
   * @param updateUserDto objeto de usuario a actualizar
   * @returns 
   */
  @Patch(':id')
  update(@Param('id') id: any, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
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
