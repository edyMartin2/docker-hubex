import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Token, TokenSchema } from './entities/token.entity';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: User.name, useFactory: () => UserSchema },
      { name: Token.name, useFactory: () => TokenSchema}
    ]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
