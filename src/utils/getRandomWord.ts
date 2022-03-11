import { words } from "./randomWord";

export const randomWord = words[Math.floor(Math.random() * words.length)];
