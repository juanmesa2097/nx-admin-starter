import { Injectable } from '@nestjs/common'
import { User, UserCreateInput, UserUpdateInput } from '@nx-admin-starter/api-interfaces'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ApiUsersService {
  public getAll(): Promise<User[]> {
    return prisma.user.findMany()
  }

  public create(user: UserCreateInput): Promise<User> {
    return prisma.user.create({
      data: user,
    })
  }

  public update(id: User['id'], user: UserUpdateInput): Promise<User> {
    return prisma.user.update({
      data: user,
      where: { id },
    })
  }

  public delete(id: User['id']): Promise<User> {
    return prisma.user.delete({ where: { id } })
  }
}
