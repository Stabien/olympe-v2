import { Exercise } from 'src/exercises/entities/exercise.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Session } from './session.entity'

@Entity()
export class SessionExercise {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  weight: number

  @Column('int', { array: true })
  sets: number[]

  @ManyToOne(() => Session, (session) => session.sessionExercises)
  session: string

  @ManyToOne(() => Exercise, (exercise) => exercise.sessionExercises)
  exercise: string
}
