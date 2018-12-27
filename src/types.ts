import {ContextMessageUpdate} from "telegraf";

export type Button = {
  text: string;
  action?: (ctx: ContextMessageUpdate) => void;
}
