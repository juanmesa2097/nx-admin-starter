import { Module } from '@nestjs/common'
import { ApiRolesController } from './api-roles.controller'
import { ApiRolesService } from './api-roles.service'

@Module({
  controllers: [ApiRolesController],
  providers: [ApiRolesService],
  exports: [ApiRolesService],
})
export class ApiRolesModule {}
