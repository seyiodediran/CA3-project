import { Module } from '@nestjs/common';
import { CitizensModule } from './citizens/citizens.module';
import { BiodataModule } from './biodata/biodata.module';

@Module({
  imports: [CitizensModule, BiodataModule]
})
export class CitizenRegisterationModule {}
