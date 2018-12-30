import {template, withUpdateSessionStep} from "../utils";
import {step} from "./step";
import {questions} from "../questions";
import {button} from "./button";

const text = template`
Если ты читаешь это сообщение, значит ты один из приглашенных гостей на вечеринку корпорации Tyrell.
Мы будем рады видеть тебя в гостях, но для начала тебе придется пройти небольшой тест что бы мы смогли удостовериться в том что ты не репликант.
\n
Прошу ответить на ряд вопросов, которые позволят оценить твой эмоциональный отклик. Отвечать следует быстро. 
`;

export const welcomeMsg = (bot) => step({
  title: template`*Приветствую, ${(props) => props.from.first_name}!*`,
  body: text,
  buttons: [button({
    name: 'start',
    text: 'Начать тест',
    action: (ctx: any) => {
      ctx.session.step = 0;
      questions(bot)[ctx.session.step](ctx)
    }
  }, bot)]
});
