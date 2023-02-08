import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userReposDocument = userRepos & Document;
//validar modelo de la base de datos iss::#2::https://hubx-global.monday.com/boards/3712466297/pulses/3712466304

@Schema()
export class userRepos {
  @Prop(String)
  issueID: string

  @Prop(String)
  userID : string  

  @Prop(String)
  level: number
} 

export const userReposSchema = SchemaFactory.createForClass(userRepos);
