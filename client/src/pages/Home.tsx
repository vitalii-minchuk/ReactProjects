import { useAppSelector } from "../store";

function Home() {
  const { words } = useAppSelector((state) => state.words);

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
