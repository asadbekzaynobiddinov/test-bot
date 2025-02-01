import {
  TelegrafModuleOptions,
  TelegrafModuleAsyncOptions,
} from 'nestjs-telegraf';
import { session } from 'telegraf';
import { config } from './index';
import { CustomContext } from 'src/common/types';

const telegrafModuleOptions = (): TelegrafModuleOptions => {
  return {
    token: config.TOKEN,
    middlewares: [
      session(),
      async (ctx: CustomContext, next) => {
        if (!ctx.session) {
          ctx.session = {};
        }
        await next();
      },
    ],
  };
};

export const options = (): TelegrafModuleAsyncOptions => {
  return {
    useFactory: () => telegrafModuleOptions(),
  };
};
