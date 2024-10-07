import { Module } from '@nestjs/common'
import { BodyweightService } from './bodyweight.service'
import { BodyweightController } from './bodyweight.controller'

@Module({
  controllers: [BodyweightController],
  providers: [BodyweightService],
})
export class BodyweightModule {}
