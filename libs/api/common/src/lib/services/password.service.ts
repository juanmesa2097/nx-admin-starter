import { Injectable } from '@nestjs/common'
import { compare, hash } from 'bcrypt'
import { config } from '../config/config'

@Injectable()
export class PasswordService {
  get bcryptSaltRounds(): string | number {
    const securityConfig = config.security
    const saltOrRounds = securityConfig.bcryptSaltOrRound

    return Number.isInteger(Number(saltOrRounds)) ? Number(saltOrRounds) : saltOrRounds
  }

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword)
  }

  hashPassword(password: string): Promise<string> {
    return hash(password, this.bcryptSaltRounds)
  }
}
