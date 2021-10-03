import { ApiConfig } from './api-config.types';
import { WebClientConfig } from './web-client-config.types';

export type Config = {
  api: ApiConfig;
  webClient: WebClientConfig;
};

const config: Config = {
  api: {
    nest: {
      port: parseInt(process.env.PORT, 10) || 3000,
      cors: {
        enabled: true,
      },
    },
    graphql: {
      sortSchema: true,
      debug: true,
      playground: true,
      introspection: true,
      installSubscriptionHandlers: true,
    },
    security: {
      expiresIn: '2m',
      refreshIn: '7d',
      bcryptSaltOrRound: 10,
    },
  },
  webClient: null,
};

export default (): Config => config;
