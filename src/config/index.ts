import * as dotenv from 'dotenv';
dotenv.config();

export type ConfigType = {
  PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
  TOKEN: string;
  BUYURTMALAR_KANALI: string;
  ARIZALAR_KANALI: string;
  WEBHOOK_URL: string;
  BOT_SECRET_PATH: string;
};

export const config: ConfigType = {
  PORT: Number(process.env.PORT) as number,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: Number(process.env.DB_PORT) as number,
  DB_USER: process.env.DB_USER as string,
  DB_PASS: process.env.DB_PASS as string,
  DB_NAME: process.env.DB_NAME as string,
  TOKEN: process.env.TOKEN,
  ARIZALAR_KANALI: process.env.ARIZALAR_KANALI,
  BUYURTMALAR_KANALI: process.env.BUYURTMALAR_KANALI,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  BOT_SECRET_PATH: process.env.BOT_SECRET_PATH,
};
