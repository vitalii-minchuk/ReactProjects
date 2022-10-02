import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchTests } from "../store/Slices/testSlice";
import * as dayjs from "dayjs";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Result() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const { tests, newTest } = useAppSelector((state) => state.tests);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  useEffect(() => {
    setChartData({
      labels: tests.map((el) => dayjs(el.time).format("YY MM DD")),
      datasets: [{ label: "results", data: tests.map((el) => el.result) }],
      backgroundColor: "rgb(0, 255, 0)",
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    });
  }, [tests]);
  return (
    <div>
      {newTest && <h1>result: {newTest?.result} %</h1>}
      <Bar options={chartOptions} data={chartData} />
      {/* {tests.map((el, i) => (
        <div key={i}>
          <p>{el.result}</p>
          <p>{dayjs(el.time).format("YY MM DD")}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Result;
