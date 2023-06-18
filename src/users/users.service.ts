import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './users.input';

import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async showAll() {
    return await this.usersRepository.find();
  }

  async create(data: UsersDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(data);
    return user;
  }

  async findByEmail(email: string): Promise<UsersDTO> {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async read(id: number) {
    return await this.usersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<UsersDTO>) {
    await this.usersRepository.update({ id }, data);
    return await this.usersRepository.findOne({ where:{id:id} });
  }

  async destroy(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }
  async upload({ photo }: UpdateUserInput) {
    const { createReadStream, filename } = await photo;
    return new Promise(async (resolve) => {
    createReadStream()
     .pipe(createWriteStream(join(process.cwd(), `./src/upload/${filename}`)))
     .on('finish', () =>
       resolve({
        
        photo: filename,
       }),
     )
     .on('error',() => {
         new HttpException('Could not save image', HttpStatus.BAD_REQUEST);
      });
    });
  }
  
}