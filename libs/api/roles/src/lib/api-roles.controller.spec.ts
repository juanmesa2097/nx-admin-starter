import { Test } from '@nestjs/testing'
import { ApiRolesController } from './api-roles.controller'
import { ApiRolesService } from './api-roles.service'

describe('ApiRolesController', () => {
  let controller: ApiRolesController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRolesService],
      controllers: [ApiRolesController],
    }).compile()

    controller = module.get(ApiRolesController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})
