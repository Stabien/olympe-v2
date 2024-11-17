import { registerDecorator, ValidationOptions } from 'class-validator'
import {
  IsUniqueConstraint,
  IsUniqueInterface,
} from '../validators/unique.validator'

export const IsUnique = (
  options: IsUniqueInterface,
  validationOptions?: ValidationOptions,
) => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'isUnique',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsUniqueConstraint,
    })
  }
}
