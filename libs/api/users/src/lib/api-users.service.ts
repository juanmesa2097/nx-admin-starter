import { Injectable } from '@nestjs/common'
import { UserCreateInput, UserUpdateInput } from '@nx-admin-starter/api-interfaces'
import { PrismaClient, Profile, User } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ApiUsersService {
  public getAll(): Promise<User[]> {
    return prisma.user.findMany({
      include: {
        profile: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  public getProfile(userId: string): Promise<Profile | null> {
    return prisma.profile.findFirst({
      where: { userId },
    })
  }

  public create(user: UserCreateInput): Promise<User> {
    return prisma.user.create({
      data: user,
      include: {
        profile: true,
      },
    })
  }

  public update(id: User['id'], user: UserUpdateInput): Promise<User> {
    return prisma.user.update({
      data: user,
      include: {
        profile: true,
      },
      where: { id },
    })
  }

  public delete(id: User['id']): Promise<User> {
    return prisma.user.delete({
      where: { id },
    })
  }
}
