import React from "react";
import "./Style.scss";
import { Doughnut } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Title, Legend } from "chart.js";

const PieChart = () => {
  let randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor3 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let randomColor4 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  Chart.register(ArcElement, Tooltip, Title, Legend);
  return (
    <div className="chart">
      <h2>Client</h2>
      <div>
        <Doughnut
          data={{
            labels: ["Jun", "Jul", "Aug", "Sept"],
            datasets: [
              {
                id: 1,
                label: "# of Sales",
                data: [18, 12, 40, 30],
                backgroundColor: [
                  randomColor1,
                  randomColor2,
                  randomColor3,
                  randomColor4,
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default PieChart;
