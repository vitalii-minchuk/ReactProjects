import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchTests } from "../store/Slices/testSlice";

function Result() {
  const { tests } = useAppSelector((state) => state.tests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTests());
  }, []);
  return (
    <div>
      {tests.map((el) => (
        <div key={el.time}>
          <p>{el.result}</p>
          <p>{el.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;
