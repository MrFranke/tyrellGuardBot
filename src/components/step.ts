import {ContextMessageUpdate, Markup} from "telegraf";
import {Button} from "../types";
import {MessagegWithProps} from "../utils";

type Step = {
  title: MessagegWithProps;
  body: MessagegWithProps;
  buttons?: Button[];
}

const createKeyboard = (buttons) => Markup.inlineKeyboard(buttons);

export const step = ({title, body, buttons = []}: Step) =>
  async (ctx: ContextMessageUpdate) => {
    const keyboard = createKeyboard(buttons);
    const message = `*${title(ctx)}* \n\n${body(ctx)}`;
    try {
      return await ctx.replyWithMarkdown(message, {reply_markup: keyboard});
    } catch (e) {
      throw e;
    }
  };
