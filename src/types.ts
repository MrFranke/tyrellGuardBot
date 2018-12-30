import {ContextMessageUpdate} from "telegraf";

export type Button = {
  name?: string;
  text: string;
  action?: (ctx: ContextMessageUpdate) => void;
}
