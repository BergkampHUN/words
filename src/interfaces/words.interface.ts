export interface Word {
  category: string;
  original: string;
  original_language: string;
  translate: string;
  translate_language: string;
}

export interface WordWithCounter extends Word {
  correct?: number;
  wrong?: number;
}
