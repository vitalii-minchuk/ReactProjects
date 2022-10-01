import { FormEvent, useState } from "react";
import { useAppDispatch } from "../store";
import { createNewWord } from "../store/Slices/wordsSlice";
import { Word } from "../types";

function AddNewWord() {
  const [value, setValue] = useState<Word>({ word: "", translation: "" });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createNewWord(value));
    setValue({ word: "", translation: "" });
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => setValue({ ...value, word: e.target.value })}
          value={value.word}
          type="text"
        />
        <input
          onChange={(e) => setValue({ ...value, translation: e.target.value })}
          value={value.translation}
          type="text"
        />
        <button onClick={handleSubmit} type="submit">
          ok
        </button>
      </form>
    </div>
  );
}

export default AddNewWord;
