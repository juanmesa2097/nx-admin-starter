import { Injectable } from '@nestjs/common'
import { RoleCreateInput, RoleUpdateInput } from '@nx-admin-starter/api-interfaces'
import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class ApiRolesService {
  public getAll(): Promise<Role[]> {
    return prisma.role.findMany()
  }

  public create(role: RoleCreateInput): Promise<Role> {
    return prisma.role.create({
      data: role,
    })
  }

  public update(id: Role['id'], role: RoleUpdateInput): Promise<Role> {
    return prisma.role.update({
      data: role,
      where: { id },
    })
  }

  public delete(id: Role['id']): Promise<Role> {
    return prisma.role.delete({ where: { id } })
  }
}
