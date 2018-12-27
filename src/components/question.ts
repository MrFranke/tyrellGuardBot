import {step} from "./step";
import {Button} from "../types";
import {MessagegWithProps} from "../utils";
import {Answer} from "./answer";

type Question = {
  title: MessagegWithProps;
  body: MessagegWithProps;
  answers: Answer[]
}

const createButtons = (answers: Answer[] = []): Button[] =>
  answers.map(answer => ({
    text: answer.text
  }));

export const question = ({title, body, answers = []}: Question) =>
  step({title: title, body: body, buttons: createButtons(answers)});
