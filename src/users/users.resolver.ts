import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { UpdateUserInput } from './dto/update-user.input';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { UserDTO } from './dto/users.dto';
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserInput } from './users.input';

@Resolver(() => UsersEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

 
 
  @Query(() => [UsersEntity], { name: 'user' })
  findAll() {
    return this.usersService.showAll();
  }

  @Query(() => UsersEntity, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.read(id);
  }

  @Mutation(() => UsersEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.upload(updateUserInput);
  }

 
}
