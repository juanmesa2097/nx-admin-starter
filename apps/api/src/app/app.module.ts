import { Module } from '@nestjs/common';
import { UserModule } from '@nx-admin-starter/api/modules/user';
import { ConfigProviderModule, GqlProviderModule } from '@nx-admin-starter/api/providers';
import { PrismaModule, PubSubModule } from '@nx-admin-starter/api/recipes';
@Module({
  imports: [ConfigProviderModule, GqlProviderModule, PrismaModule, PubSubModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
