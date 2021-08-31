import { Injectable } from '@nestjs/common'
import { RoleCreateInput, RoleUpdateInput } from '@nx-admin-starter/api-interfaces'
import { PrismaService } from '@nx-admin-starter/api/common'
import { Role } from '@prisma/client'

@Injectable()
export class ApiRolesService {
  constructor(private prisma: PrismaService) {}

  public getAll(): Promise<Role[]> {
    return this.prisma.role.findMany()
  }

  public create(role: RoleCreateInput): Promise<Role> {
    return this.prisma.role.create({
      data: role,
    })
  }

  public update(id: Role['id'], role: RoleUpdateInput): Promise<Role> {
    return this.prisma.role.update({
      data: role,
      where: { id },
    })
  }

  public delete(id: Role['id']): Promise<Role> {
    return this.prisma.role.delete({ where: { id } })
  }
}
