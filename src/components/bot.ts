import Telegraf, {ContextMessageUpdate} from "telegraf";
import {welcomeMsg} from "./start";
import {step} from "./step";
import {template} from "../utils";
const session = require('telegraf/session');

let bot: Telegraf<ContextMessageUpdate> = null;

export const getBot = () => bot;

export const create = () => {
  bot = new Telegraf(process.env.BOT_TOKEN);
  bot.use(session());
  bot.start(welcomeMsg(bot));
  bot.help(step({
    title: template``,
    body: template`Пройдите тест *Войта-Кампфа* для того что бы получить приглашение на мероприятие.`
  }));
  bot.startPolling();
  return bot;
};
