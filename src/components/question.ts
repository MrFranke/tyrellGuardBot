import {step} from "./step";
import {Button} from "../types";
import {HRindex, MessagegWithProps, template, withUpdateSessionStep} from "../utils";
import {Answer} from "./answer";
import {button} from "./button";
import {questions} from "../questions";
import {finishMsg} from "./finish";

type Question = {
  title: MessagegWithProps;
  body: MessagegWithProps;
  answers: Answer[]
}

const createButtons = (bot) => (answers: Answer[] = []): Button[] =>
  answers.map((answer, idx) => (button({
    name: `answer_${idx}`,
    text: String(HRindex(idx)),
    action: withUpdateSessionStep(ctx => {
      const questionsList = questions(bot);
      const step = ctx.session.step;
      if (questionsList.length <= step) {
        return finishMsg(bot)(ctx);
      }
      questionsList[ctx.session.step](ctx);
    })
  }, bot)));

const createAnswersList = (answers: Answer[]): string =>
  answers.map((answer, idx) => `${HRindex(idx)} – ${answer.text} \n`).join('');

const withAnswers =
  (body: MessagegWithProps) =>
    (answers: Answer[]): MessagegWithProps =>
          template`${body}\n\n*Варианты ответа:* \n\n${() => createAnswersList(answers)}`;

export const question = ({title, body, answers = []}: Question, bot) =>
  step({
    title: title,
    body: withAnswers(body)(answers),
    buttons: createButtons(bot)(answers)
  });
