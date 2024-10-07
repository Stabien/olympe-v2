import { MealFoodstuff } from 'src/meals/entities/mealFoodstuff.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Foodstuff {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  kcal: number

  @Column()
  lipids: number

  @Column()
  carbohydrates: number

  @Column()
  sugar: number

  @Column()
  proteins: number

  @Column()
  image: string

  @OneToMany(() => MealFoodstuff, (mealFoodstuff) => mealFoodstuff.meal)
  mealFoodstuffs: MealFoodstuff[]
}
