import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
  // Other input fields...
}

@InputType()
export class UpdateUserInput {
    @Field({nullable :true})
    name: string;
  
    @Field({nullable :true})
    email: string;  
  
    @Field({nullable :true})
    password: string;  
  
    @Field({nullable :true})
    gender: string;  
  
    @Field({nullable :true})
    date_of_birth: Date; 
    
    @Field({nullable :true})
    referralCode: string;  
  
    @Field({nullable :true})
    photo: string;  

  // Other optional input fields...
}
