import {Button} from "../types";
import {Markup} from "telegraf";

const stabAction = () => {};

export const button = ({text, action, name}: Button, bot) => {
  // @ts-ignore
  bot.action(name, action ? action : stabAction);
  return Markup.callbackButton(text, name);
};
