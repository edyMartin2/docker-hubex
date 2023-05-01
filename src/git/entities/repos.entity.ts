import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RepoDocument = Repo & Document;
//validar modelo de la base de datos iss::#2::https://hubx-global.monday.com/boards/3712466297/pulses/3712466304

@Schema()
export class Repo {
  @Prop(String)
  repoUrl: string;

  @Prop(String)
  descriptionIssue: string;
} 

export const RepoSchema = SchemaFactory.createForClass(Repo);
