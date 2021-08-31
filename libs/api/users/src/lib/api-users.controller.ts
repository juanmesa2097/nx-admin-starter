import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common'
import { User, UserCreateInput } from '@nx-admin-starter/api-interfaces'
import { Profile } from '@prisma/client'
import { ApiUsersService } from './api-users.service'

@Controller('users')
export class ApiUsersController {
  constructor(private apiUsersService: ApiUsersService) {}

  @Get()
  public getAll(): Promise<User[]> {
    return this.apiUsersService.getAll()
  }

  @Get(':id/profile')
  public getProfile(@Param('id', ParseUUIDPipe) id: User['id']): Promise<Profile | null> {
    return this.apiUsersService.getProfile(id)
  }

  @Post()
  public create(@Body() user: UserCreateInput): Promise<User> {
    return this.apiUsersService.create(user)
  }

  @Put(':id')
  public update(
    @Param('id', ParseUUIDPipe) id: User['id'],
    @Body() user: UserCreateInput
  ): Promise<User> {
    return this.apiUsersService.update(id, user)
  }

  @Delete(':id')
  public delete(@Param('id', ParseUUIDPipe) id: User['id']): Promise<User> {
    return this.apiUsersService.delete(id)
  }
}
