import { Module } from '@nestjs/common'
import { FoodstuffsService } from './foodstuffs.service'
import { FoodstuffsController } from './foodstuffs.controller'

@Module({
  controllers: [FoodstuffsController],
  providers: [FoodstuffsService],
})
export class FoodstuffsModule {}
