import { useState } from "react";
import { useAppDispatch } from "../store";
import { addNewTest } from "../store/Slices/testSlice";
import { Test } from "../types";

function Quiz() {
  const [test, setTest] = useState<Test | null>(null);
  const dispatch = useAppDispatch();

  const handleResult = () => {
    dispatch(
      addNewTest({
        time: new Date().toISOString(),
        result: 100,
      })
    );
  };

  return (
    <div>
      <button onClick={handleResult}>ok</button>
    </div>
  );
}

export default Quiz;
