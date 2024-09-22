import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BodyweightService } from './bodyweight.service';
import { CreateBodyweightDto } from './dto/create-bodyweight.dto';
import { UpdateBodyweightDto } from './dto/update-bodyweight.dto';

@Controller('bodyweight')
export class BodyweightController {
  constructor(private readonly bodyweightService: BodyweightService) {}

  @Post()
  create(@Body() createBodyweightDto: CreateBodyweightDto) {
    return this.bodyweightService.create(createBodyweightDto);
  }

  @Get()
  findAll() {
    return this.bodyweightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyweightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBodyweightDto: UpdateBodyweightDto) {
    return this.bodyweightService.update(+id, updateBodyweightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyweightService.remove(+id);
  }
}
