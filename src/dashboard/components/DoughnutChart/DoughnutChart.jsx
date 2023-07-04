import { Doughnut } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip } from "chart.js";

const DoughnutChart = () => {
  Chart.register(ArcElement, Tooltip);
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [4, 4, 4, 4, 6, 6, 6, 6, 6, 6],
        backgroundColor: [
          "#4f46e5",
          "#4f46e5",
          "#4f46e5",
          "#4f46e5",
          "#CCF2FF",
          "#CCF2FF",
          "#CCF2FF",
          "#CCF2FF",
          "#CCF2FF",
          "#CCF2FF",
        ],
        borderColor: [
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
        ],
        borderWidth: 2,
      },
    ],
  };

  //   const options = {
  //     maintainAspectRatio: false,
  //     animation: true,
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: "top",
  //       },
  //       tooltip: {
  //         enabled: true,
  //       },
  //     },
  //   };
  return <Doughnut data={data} />;
};

export default DoughnutChart;
