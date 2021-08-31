/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AllExceptionsFilter } from '@nx-admin-starter/api/common'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 3333
  const globalPrefix = 'api'

  app
    .useGlobalPipes(new ValidationPipe({ whitelist: true }))
    .useGlobalFilters(new AllExceptionsFilter())
    .setGlobalPrefix(globalPrefix)
    .enableCors({ origin: '*' })

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`)
  })
}

bootstrap()
