export interface Start {
    start: boolean
    results: boolean
    links: string[]
  }

export interface Questions {
  questions: DBtest;
  error: boolean;
}

export interface Question {
  question: string;
  code: string;
  answers: Array<[string, boolean]>;
  link: string;
}

export interface Counter {
  progression: number;
  correctAnswers: number;
  activeQuestion: boolean;
  clicked: number;
  quiz: string;
}

interface DBtest {
  questions: Question[]
}