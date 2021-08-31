import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { RoleCreateInput, RoleUpdateInput } from '@nx-admin-starter/api-interfaces'
import { Role } from '@prisma/client'
import { ApiRolesService } from './api-roles.service'

@Controller('roles')
export class ApiRolesController {
  constructor(private apiRolesService: ApiRolesService) {}

  @Get()
  public getAll() {
    return this.apiRolesService.getAll()
  }

  @Post()
  public create(@Body() role: RoleCreateInput): Promise<Role> {
    return this.apiRolesService.create(role)
  }

  @Put(':id')
  public update(@Param() id: Role['id'], @Body() role: RoleUpdateInput): Promise<Role> {
    return this.apiRolesService.update(id, role)
  }

  @Delete(':id')
  public delete(@Param('id') id: Role['id']): Promise<Role> {
    return this.apiRolesService.delete(id)
  }
}
