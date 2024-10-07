import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { FoodstuffsService } from './foodstuffs.service'
import { CreateFoodstuffDto } from './dto/create-foodstuff.dto'
import { UpdateFoodstuffDto } from './dto/update-foodstuff.dto'

@Controller('foodstuffs')
export class FoodstuffsController {
  constructor(private readonly foodstuffsService: FoodstuffsService) {}

  @Post()
  create(@Body() createFoodstuffDto: CreateFoodstuffDto) {
    return this.foodstuffsService.create(createFoodstuffDto)
  }

  @Get()
  findAll() {
    return this.foodstuffsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodstuffsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoodstuffDto: UpdateFoodstuffDto,
  ) {
    return this.foodstuffsService.update(+id, updateFoodstuffDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodstuffsService.remove(+id)
  }
}
