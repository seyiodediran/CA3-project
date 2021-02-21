import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity'

@Injectable()
export class CitizensService {

  constructor(

    // Inject Repository for use within the class as if it is part of the class
    @InjectRepository(Citizen)
    private citizensRepository: Repository<Citizen>
  ){}

  getSignup(): {} {
   
    return {title: "Sign-up"}
  }

  getCitizens(): {} {
    const citizens = this.citizensRepository.find();

    
    return {citizens:citizens}
    }

  
  

  async create(createCitizenDto: CreateCitizenDto) {
    // return 'This action adds a new citizen';
    const newCitizen: Citizen = this.citizensRepository.create(createCitizenDto);
    return this.citizensRepository.save(newCitizen);
  }

  async findAll() {
    // return `This action returns all citizens`;
    return await this.citizensRepository.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} citizen`;
    return await this.citizensRepository.findOne(id);
  }

  async update(id: number, updateCitizenDto: UpdateCitizenDto) {
    // return `This action updates a #${id} citizen`;
    return await this.citizensRepository.update(id, updateCitizenDto);
  }

  async remove(id: number) {
    // return `This action removes a #${id} citizen`;
    return await this.citizensRepository.delete(id);
  }
}
