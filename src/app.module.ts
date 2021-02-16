import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegisterationModule } from './citizen-registeration/citizen-registeration.module';

@Module({
  imports: [TypeOrmModule.forRoot(),CitizenRegisterationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
