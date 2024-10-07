import { PartialType } from '@nestjs/mapped-types'
import { CreateFoodstuffDto } from './create-foodstuff.dto'

export class UpdateFoodstuffDto extends PartialType(CreateFoodstuffDto) {}
