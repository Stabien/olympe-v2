import { User } from 'src/users/entities/user.entity'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { SessionExercise } from './sessionExercise.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  date: Date

  @Column()
  tag: string

  @ManyToOne(() => User, (user) => user.sessions)
  user: string

  @OneToMany(
    () => SessionExercise,
    (sessionExercise) => sessionExercise.session,
  )
  sessionExercises: SessionExercise[]
}
