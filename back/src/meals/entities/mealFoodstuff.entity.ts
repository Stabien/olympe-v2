import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Meal } from './meal.entity';
import { Foodstuff } from 'src/foodstuffs/entities/foodstuff.entity';

@Entity()
export class MealFoodstuff {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Meal, (meal) => meal.mealFoodstuffs)
  meal: string;

  @ManyToOne(() => Foodstuff, (foodstuff) => foodstuff.mealFoodstuffs)
  foodstuff: string;
}
