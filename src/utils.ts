import {ContextMessageUpdate} from "telegraf";

type Explain = (props: any) => string;
type StringProps = ContextMessageUpdate;
export type MessagegWithProps = (props: StringProps) => string
type Template = (strings: TemplateStringsArray, ...exps: Explain[]) => MessagegWithProps;

export const template: Template = (strings, ...exps) => {
  return (props: StringProps) => {
    return exps.reduce((acc, value, idx) => {
      acc.push(value(props), strings[idx+1]);
      return acc;
    }, [strings[0]]).join('');
  };
};
