import Telegraf from 'telegraf';
import {question} from './components/question';
import {welcomeMsg} from "./components/start";
import {step} from "./components/step";
import {template} from "./utils";


const bot = new Telegraf(process.env.BOT_TOKEN);
const questions = {
    1: question({
        title: template`Вопрос 1`,
        body: template`Текст вопроса для ${(props) => props.from.first_name}`,
        answers: [{
            text: 'Да'
        }, {
            text: 'Нет'
        }, {
            text: 'Возможно'
        }],
    }),
    2: question({
        title: template`Вопрос 2`,
        body: template`Текст вопроса`,
        answers: [{
            text: 'Да'
        }, {
            text: 'Нет'
        }],
    }),
    3: question({
        title: template`Вопрос 3`,
        body: template`Текст вопроса`,
        answers: [{
            text: 'Да'
        }],
    })
};
bot.start(welcomeMsg);
bot.help(step({
    title: template``,
    body: template`Пройдите тест *Войта-Кампфа* для того что бы получить приглашение на мероприятие.`
}));
bot.on('message', questions[1]);

bot.startPolling();
