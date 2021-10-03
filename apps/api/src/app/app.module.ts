import { Module } from '@nestjs/common';
import { ConfigProviderModule } from '@nx-admin-starter/api/providers';
@Module({
  imports: [ConfigProviderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
