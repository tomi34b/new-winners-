import { defaults } from "chart.js";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement);
defaults.font.family = "'Poppins', sans-serif";
defaults.font.weight = "600";

export const options = {
  maintainAspectRatio: false,
  maxBarThickness: 20,
  scales: {
    x: {
      grid: {
        display: false,
        tickBorderDash: 0,
      },
      border: {
        display: false,
      },
      ticks: {
        font: {
          weight: "normal",
        },
        major: {
          enable: true,
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};
const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// bar chart data

const BarChart = (props) => {
  console.log(props.data);
  const barChartData = {
    labels,
    datasets: [
      {
        label: "First timers",
        data: props?.data?.monthlyFirstTimers
          ? props?.data?.monthlyFirstTimers.reduce((acc, curr) => {
              let yD = acc;
              switch (curr.month) {
                case "JAN":
                  yD[0] = curr.count;
                  return yD;
                case "FEB":
                  yD[1] = curr.count;
                  return yD;
                case "MAR":
                  yD[2] = curr.count;
                  return yD;
                case "APR":
                  yD[3] = curr.count;
                  return yD;
                case "MAY":
                  yD[4] = curr.count;
                  return yD;
                case "JUN":
                  yD[5] = curr.count;
                  return yD;
                case "JUL":
                  yD[6] = curr.count;
                  return yD;
                case "AUG":
                  yD[7] = curr.count;
                  return yD;
                case "SEP":
                  yD[8] = curr.count;
                  return yD;
                case "OCT":
                  yD[9] = curr.count;
                  return yD;
                case "NOV":
                  yD[10] = curr.count;
                  return yD;
                case "DEC":
                  yD[11] = curr.count;
                  return yD;
              }
            }, Array(12).fill(0))
          : Array(12).fill(3),
        backgroundColor: "#F81B1B",
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="mt-4">
      <Bar
        height={"100px"}
        options={options}
        data={barChartData}
        className="w-full"
      />
    </div>
  );
};

export default BarChart;
