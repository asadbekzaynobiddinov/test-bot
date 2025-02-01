import { Context } from 'telegraf';

export interface MySessionData {
  lang?: string;
  lastMessage?: any;
}

export interface CustomContext extends Context {
  session: MySessionData;
}
