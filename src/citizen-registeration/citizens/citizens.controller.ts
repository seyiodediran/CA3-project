import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly citizensService: CitizensService) {}

  @Get('signup')
  @Render('signup.html')
  getSignup(): {} {
    return this.citizensService.getSignup()
  }
  

  @Post()
  create(@Body() createCitizenDto: CreateCitizenDto) {
    return this.citizensService.create(createCitizenDto);
  }

  @Get()
  // @Render('citizens.html')
  // getCitizens(): {}{
  //   return this.citizensService.getCitizens();
  // }
  findAll() {
    return this.citizensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizensService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizenDto) {
    return this.citizensService.update(+id, updateCitizenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizensService.remove(+id);
  }
}
