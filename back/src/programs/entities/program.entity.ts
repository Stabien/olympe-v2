import { Exercise } from 'src/exercises/entities/exercise.entity'
import { User } from 'src/users/entities/user.entity'
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Program {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToOne(() => User, (user) => user.programs)
  user: User

  @ManyToMany(() => Exercise)
  @JoinTable({ name: 'program_exercise' })
  exercises: Exercise[]
}
