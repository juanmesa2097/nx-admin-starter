import { User } from '@generated/user/user.model';

export interface Jwt {
  userId: User['id'];
  /**
   * Issued at
   */
  iat: number;
  /**
   * Expiration time
   */
  exp: number;
}
