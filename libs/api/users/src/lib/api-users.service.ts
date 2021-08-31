import { Injectable } from '@nestjs/common'
import { UserCreateInput, UserUpdateInput } from '@nx-admin-starter/api-interfaces'
import { PrismaService } from '@nx-admin-starter/api/common'
import { Profile, User } from '@prisma/client'

@Injectable()
export class ApiUsersService {
  constructor(private prisma: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        profile: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  async getProfile(userId: string): Promise<Profile | null> {
    const userProfile = await this.prisma.profile.findFirst({
      where: { userId },
    })

    return userProfile
  }

  create(user: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: user,
      include: {
        profile: true,
      },
    })
  }

  update(id: User['id'], user: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      data: user,
      include: {
        profile: true,
      },
      where: { id },
    })
  }

  delete(id: User['id']): Promise<User> {
    return this.prisma.user.delete({ where: { id } })
  }
}
