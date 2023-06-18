import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  
  @Field()
  email: string;  

  @Field()
  password: string;  

  @Field()
  gender: string;  

  @Field()
  date_of_birth: Date; 
  
  @Field()
  referralCode: string;  

  @Field()
  photo: string;  
}
