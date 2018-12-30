import {welcomeMsg} from "./components/start";
import {step} from "./components/step";
import {template} from "./utils";
import {create} from "./components/bot";

const bot = create();

// @ts-ignore
//const steps: ((ctx: ContextMessageUpdate) => Promise<any>)[] = questions;
bot.start(welcomeMsg);
bot.help(step({
    title: template``,
    body: template`Пройдите тест *Войта-Кампфа* для того что бы получить приглашение на мероприятие.`
}));
bot.on('message', step({
    title: template``,
    body: template`Закончите выполнение теста что бы получить информацию о мероприятииы`
}));
