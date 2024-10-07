import { Bodyweight } from 'src/bodyweight/entities/bodyweight.entity'
import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Meal } from 'src/meals/entities/meal.entity'
import { Program } from 'src/programs/entities/program.entity'
import { Session } from 'src/sessions/entities/session.entity'
import { hash } from 'bcrypt'
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

export enum UserRole {
  ADMIN = 'admin',
  COACH = 'coach',
  CUSTOMER = 'customer',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  firstname: string

  @Column()
  lastname: string

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  role: string

  @OneToMany(() => Meal, (meal) => meal.user)
  meals: Meal[]

  @OneToMany(() => Program, (program) => program.user)
  programs: Program[]

  @OneToMany(() => Exercise, (exercise) => exercise.user)
  exercises: Exercise[]

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[]

  @OneToMany(() => Bodyweight, (bodyweight) => bodyweight.user)
  bodyweight: Bodyweight[]

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 10)
    }
  }
}
