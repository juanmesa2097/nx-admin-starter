import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserCreateInput } from '@nx-admin-starter/api-interfaces'
import { User } from '@prisma/client'
import { ApiUsersService } from './api-users.service'

@Controller('users')
export class ApiUsersController {
  constructor(private apiUsersService: ApiUsersService) {}

  @Get()
  public getAll(): Promise<User[]> {
    return this.apiUsersService.getAll()
  }

  @Post()
  public create(@Body() user: UserCreateInput): Promise<User> {
    return this.apiUsersService.create(user)
  }

  @Put(':id')
  public update(@Param() id: User['id'], @Body() user: UserCreateInput): Promise<User> {
    return this.apiUsersService.update(id, user)
  }

  @Delete(':id')
  public delete(@Param('id') id: User['id']): Promise<User> {
    return this.apiUsersService.delete(id)
  }
}
