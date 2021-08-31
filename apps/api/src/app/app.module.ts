import { Module } from '@nestjs/common'
import { ApiRolesModule } from '@nx-admin-starter/api/roles'
import { ApiUsersModule } from '@nx-admin-starter/api/users'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ApiUsersModule, ApiRolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
