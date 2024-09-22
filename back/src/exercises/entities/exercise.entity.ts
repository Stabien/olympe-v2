import { SessionExercise } from 'src/sessions/entities/sessionExercise.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.exercises)
  user: string;

  @OneToMany(
    () => SessionExercise,
    (sessionExercise) => sessionExercise.exercise,
  )
  sessionExercises: SessionExercise[];
}
