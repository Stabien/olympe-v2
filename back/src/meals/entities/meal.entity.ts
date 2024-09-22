import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MealFoodstuff } from './mealFoodstuff.entity';

@Entity()
export class Meal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.meals)
  user: string;

  @OneToMany(() => MealFoodstuff, (mealFoodstuff) => mealFoodstuff.meal)
  mealFoodstuffs: MealFoodstuff[];
}
