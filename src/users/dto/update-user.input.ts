import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { FileUpload } from '../users.file_upload.interface';
import { skip } from 'node:test';
@InputType()
export class UpdateUserInput  {
  /* @Field(() => Int)
  id: number; */
  @Field(() => Int, { description: 'ID' })
  id: number;
  
  @Field(() => GraphQLUpload)
  photo: Promise<FileUpload>;
}
