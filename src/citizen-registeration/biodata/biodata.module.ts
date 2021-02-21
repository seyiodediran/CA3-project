import { Module } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { BiodataController } from './biodata.controller';
import { Citizen } from "../citizens/entities/citizen.entity"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Biodatum } from './entities/biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biodatum, Citizen])],
  controllers: [BiodataController],
  providers: [BiodataService]
})
export class BiodataModule {}
