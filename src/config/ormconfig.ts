import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest',
  password: 'toor',
  database: 'uno_nestjs',
  entities: ['dist/**/*.entity.js'],
  // "entities": ["src/**/**.entity{.ts,.js}"],
  synchronize: true,
  driver: require('mysql2')
};

export default ormconfig;
