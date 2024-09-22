import { PartialType } from '@nestjs/mapped-types';
import { CreateBodyweightDto } from './create-bodyweight.dto';

export class UpdateBodyweightDto extends PartialType(CreateBodyweightDto) {}
