import { Injectable } from '@nestjs/common'
import { CreateSessionDto } from './dto/create-session.dto'
import { UpdateSessionDto } from './dto/update-session.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Session } from './entities/session.entity'
import { Repository } from 'typeorm'
import { SessionExercise } from './entities/sessionExercise.entity'
import { CreateSessionExerciseDto } from './dto/create-session-exercise.dto'

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,

    @InjectRepository(SessionExercise)
    private sessionExerciseRepository: Repository<SessionExercise>,
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const session = this.sessionRepository.create(createSessionDto)
    return await this.sessionRepository.save(session)
  }

  async addExercises(
    sessionId: string,
    sessionExercises: CreateSessionExerciseDto[],
  ) {
    const newSessionExercises = sessionExercises.map((exercise) => ({
      ...exercise,
      session: sessionId,
    }))

    return await this.sessionExerciseRepository.insert(newSessionExercises)
  }

  async findByUser(userId: string) {
    return await this.sessionRepository.find({
      relations: {
        sessionExercises: true,
      },
      where: {
        user: {
          id: userId,
        },
      },
    })
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    const session = await this.sessionRepository.find({
      where: { id },
      relations: { sessionExercises: true },
    })

    const updatedSession = this.sessionRepository.create({
      ...session,
      ...updateSessionDto,
    })

    return await this.sessionRepository.save(updatedSession)
  }

  remove(id: number) {
    return `This action removes a #${id} session`
  }
}
