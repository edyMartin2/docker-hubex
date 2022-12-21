import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop(String)
  name: string;

  @Prop(String)
  email: string;

  @Prop(String)
  password: string;

  @Prop(String)
  userName: string
  
}

export const UserSchema = SchemaFactory.createForClass(User);
