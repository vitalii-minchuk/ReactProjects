import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchWords } from "../store/Slices/wordsSlice";

function Home() {
  const { words } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, []);
  return (
    <div>
      {words.map((el) => (
        <div key={el.word}>
          <p>{el.word}</p>
          <p>{el.translation}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
