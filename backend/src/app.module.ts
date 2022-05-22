import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import ormconfig from '../ormconfig';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
