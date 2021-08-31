import { Test } from '@nestjs/testing'
import { ApiRolesService } from './api-roles.service'

describe('ApiRolesService', () => {
  let service: ApiRolesService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiRolesService],
    }).compile()

    service = module.get(ApiRolesService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
