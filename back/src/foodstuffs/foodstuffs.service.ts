import { Injectable } from '@nestjs/common';
import { CreateFoodstuffDto } from './dto/create-foodstuff.dto';
import { UpdateFoodstuffDto } from './dto/update-foodstuff.dto';

@Injectable()
export class FoodstuffsService {
  create(createFoodstuffDto: CreateFoodstuffDto) {
    return 'This action adds a new foodstuff';
  }

  findAll() {
    return `This action returns all foodstuffs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodstuff`;
  }

  update(id: number, updateFoodstuffDto: UpdateFoodstuffDto) {
    return `This action updates a #${id} foodstuff`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodstuff`;
  }
}
