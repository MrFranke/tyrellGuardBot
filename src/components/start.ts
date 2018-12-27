import {template} from "../utils";
import {step} from "./step";

const text = template`
Если ты читаешь это сообщение, значит ты один из приглашенных гостей на вечеринку корпорации Tyrell.
Мы будем рады видеть тебя в гостях, но для начала тебе придется пройти небольшой тест что бы мы смогли удостовериться в том что ты не репликант.
`;

export const welcomeMsg = step({title: template`*Приветствую, ${(props) => props.from.first_name}!*`, body: text});
