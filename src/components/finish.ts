import {step} from "./step";
import {template} from "../utils";

const text = template`
Благодарим за прохождение теста. Мы с вами свяжемся, когда сможем раскрыть место проведение мероприятия 
`;

export const finishMsg = (bot) => step({
  title: template`*Тестирование завершено!*`,
  body: text,
  buttons: []
});
