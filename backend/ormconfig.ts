/* eslint-disable prettier/prettier */
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'xavimessi1',
  database: 'medium_database',
  entities : [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize : true
};

export default config;
