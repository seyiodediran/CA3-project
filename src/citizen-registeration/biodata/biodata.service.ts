import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

import { Citizen } from '../citizens/entities/citizen.entity'
import { Biodatum } from './entities/biodatum.entity';
import { Repository } from 'typeorm';


@Injectable()
export class BiodataService {
  constructor(
    @InjectRepository(Citizen)
    private citizenRepository: Repository<Citizen>,

    @InjectRepository(Biodatum)
    private biodatumRepository: Repository<Biodatum>
  ) {}
    

  async create(createBiodatumDto: CreateBiodatumDto) {
    // return 'This action adds a new biodatum';
    const newBiodatum = this.biodatumRepository.create(createBiodatumDto);

    if (createBiodatumDto.citizen){
      const newCitizen = this.citizenRepository.create(createBiodatumDto.citizen);

      const citizen: Citizen = await this.citizenRepository.save(newCitizen)

      newBiodatum.citizen = citizen;
    }
    return this.biodatumRepository.save(newBiodatum)

  }

  findAll() {
    return `This action returns all biodata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodatum`;
  }

  update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    return `This action updates a #${id} biodatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} biodatum`;
  }
}
