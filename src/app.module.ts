import { Module } from '@nestjs/common';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { AppController } from './app.controller';
    import { AppService } from './app.service';
    import { UsersModule } from './users/users.module';
import ormconfig from './config/ormconfig';

    @Module({
      imports: [TypeOrmModule.forRoot(ormconfig), UsersModule],
      controllers: [AppController],
      providers: [AppService],
    })
    export class AppModule {}