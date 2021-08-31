import { Module } from '@nestjs/common'
import { PrismaService } from '@nx-admin-starter/api/common'
import { ApiRolesController } from './api-roles.controller'
import { ApiRolesService } from './api-roles.service'

@Module({
  controllers: [ApiRolesController],
  providers: [ApiRolesService, PrismaService],
  exports: [ApiRolesService],
})
export class ApiRolesModule {}
