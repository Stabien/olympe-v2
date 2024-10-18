import { User } from 'src/users/entities/user.entity'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { SessionExercise } from './sessionExercise.entity'
import { Program } from 'src/programs/entities/program.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  date: Date

  @Column()
  tag: string

  @ManyToOne(() => User, (user) => user.sessions)
  user: User

  @ManyToOne(() => Program, (program) => program.sessions)
  program: Program

  @OneToMany(
    () => SessionExercise,
    (sessionExercise) => sessionExercise.session,
  )
  sessionExercises: SessionExercise[]
}
