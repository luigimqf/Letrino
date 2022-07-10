import { datedWords, words } from "./randomWord";

const MILISSECONDS_IN_A_MINUTE = 60 * 1000;

interface IDailyWord {
  id: number;
  word: string;
}

export function getDate(): string {
  const today = new Date();
  const correctedDate = new Date(
    today.valueOf() - today.getTimezoneOffset() * MILISSECONDS_IN_A_MINUTE
  );
  return correctedDate.toISOString().split("T")[0];
}

export function getTodayWord(): IDailyWord {
  const wordSelected = datedWords[getDate()];
  return wordSelected;
}

export const randomWord = words[Math.floor(Math.random() * words.length)];
