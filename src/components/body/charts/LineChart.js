import React from "react";
import "./Style.scss";
import { Bar } from "react-chartjs-2";

import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  Tooltip,
} from "chart.js";

const LineChart = () => {
  let randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor3 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor4 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor5 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  Chart.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Legend,
    Tooltip
  );
  return (
    <div className="chart">
      <h2>Sales Statistics</h2>
      <Bar
        data={{
          labels: ["Jun", "Jul", "Aug", "Sept", "Oct"],
          datasets: [
            {
              id: 1,
              label: "# of Sales",
              data: [5, 16, 7, 32, 20],
              backgroundColor: [
                randomColor1,
                randomColor2,
                randomColor3,
                randomColor4,
                randomColor5,
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
