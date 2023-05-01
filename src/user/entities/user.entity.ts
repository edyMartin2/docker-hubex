import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from './enums/type';

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

  //investigar si el token puede llegar a cambiar ISS:#1::https://hubx-global.monday.com/boards/3712466297/pulses/3712466305
  @Prop(String)
  gitToken: string

  @Prop({ type: Number, enum: Types})
  type: Number
  
}

export const UserSchema = SchemaFactory.createForClass(User);
