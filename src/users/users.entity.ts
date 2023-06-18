import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column({nullable: false})
  password: string;

  @Column({nullable: true})
  gender: string;

  @Column({nullable: true})
  date_of_birth: Date;

  @Column({nullable: true})
  referralCode: string;

  @Column({nullable: true})
  @Field(() => String)
  photo: string;
}