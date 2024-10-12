import { User } from 'src/users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Bodyweight {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  date: Date

  @Column()
  value: number

  @ManyToOne(() => User, (user) => user.bodyweight)
  user: User
}
