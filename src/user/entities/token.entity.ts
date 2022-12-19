import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @Prop(String)
  userId: string

  @Prop(String)
  token : string

  @Prop(String)
  creationDate : string 
}

export const TokenSchema = SchemaFactory.createForClass(Token);
