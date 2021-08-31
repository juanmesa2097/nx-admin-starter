import { Module } from '@nestjs/common'
import { PrismaService } from '@nx-admin-starter/api/common'
import { ApiUsersController } from './api-users.controller'
import { ApiUsersService } from './api-users.service'

@Module({
  controllers: [ApiUsersController],
  providers: [ApiUsersService, PrismaService],
  exports: [ApiUsersService],
})
export class ApiUsersModule {}
