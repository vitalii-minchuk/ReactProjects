import { Quiz, Word } from "../types";

export const getWordsForQuiz = (words: Word[]) => {
  const array: Array<Quiz> = [];
  const randomWordsIndexes = getRandomNumbers(words.length);
  for (let i = 0; i < words.length; i += 1) {
    if (randomWordsIndexes.includes(i)) {
      const question = words[i].word;
      const correct = words[i].translation;
      const filteredWords = words.filter((el) => el.word !== words[i].word);
      const randomIncorrectIndexes = getRandomNumbers(filteredWords.length, 3);
      const incorrect = filteredWords
        .filter((_, i) => randomIncorrectIndexes.includes(i))
        .map((el) => el.translation);

      array.push({ question, correct, incorrect });
    }
  }
  return array;
};

export const getRandomNumbers = (range: number, arraySize: number = 10) => {
  const array: Array<number> = [];
  const min = 0;
  const max = Math.floor(range);

  for (let i = 0; i < arraySize; i += 1) {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    } else {
      i -= 1;
    }
  }

  return array;
};

export const shuffleAnswers = (obj: Quiz) => {
  if (!obj) return;
  const shuffledArray: Array<string> = [];
  const combinedArray = [obj.correct, ...obj.incorrect];
  const randomIndexes = getRandomNumbers(4, 4);

  randomIndexes.forEach((el) => {
    shuffledArray.push(combinedArray[el]);
  });

  return shuffledArray;
};
