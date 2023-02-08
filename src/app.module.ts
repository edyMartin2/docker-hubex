import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { TestControllers } from './Controlllers/Test';
import { GitModule } from './git/git.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://root:pass12345@mongodb:27017/shop?serverSelectionTimeoutMS=2000&authSource=admin`,
    ),
    ProductModule,
    UserModule,
    GitModule,
  ],
  controllers: [AppController, TestControllers],
  providers: [AppService],
})
export class AppModule {}
