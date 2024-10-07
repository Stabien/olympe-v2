import { Injectable } from '@nestjs/common'
import { CreateBodyweightDto } from './dto/create-bodyweight.dto'
import { UpdateBodyweightDto } from './dto/update-bodyweight.dto'

@Injectable()
export class BodyweightService {
  create(createBodyweightDto: CreateBodyweightDto) {
    return 'This action adds a new bodyweight'
  }

  findAll() {
    return `This action returns all bodyweight`
  }

  findOne(id: number) {
    return `This action returns a #${id} bodyweight`
  }

  update(id: number, updateBodyweightDto: UpdateBodyweightDto) {
    return `This action updates a #${id} bodyweight`
  }

  remove(id: number) {
    return `This action removes a #${id} bodyweight`
  }
}
