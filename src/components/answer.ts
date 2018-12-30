
export type Answer = {
  text: string;
}

export const answer = ({text}: Answer): Answer => {
  return {text};
};
