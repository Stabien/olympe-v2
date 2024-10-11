import { Module } from '@nestjs/common'
import { SessionsService } from './sessions.service'
import { SessionsController } from './sessions.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Session } from './entities/session.entity'
import { SessionExercise } from './entities/sessionExercise.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Session, SessionExercise])],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
