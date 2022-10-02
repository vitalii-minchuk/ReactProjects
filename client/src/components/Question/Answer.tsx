import { Box } from "@chakra-ui/react";

interface IAnswerProps {
  answer: string;
  currentAnswer: string;
  correct: string;
  onClick: (answer: string) => void;
}
function Answer({ onClick, answer, correct, currentAnswer }: IAnswerProps) {
  const isCorrect = currentAnswer && answer === correct;
  const isIncorrect = currentAnswer === answer && currentAnswer !== correct;
  return (
    <Box
      onClick={() => onClick(answer)}
      bg={`${isCorrect ? "green" : ""} ${isIncorrect ? "red" : ""}`}
    >
      {answer}
    </Box>
  );
}

export default Answer;
