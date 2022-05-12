import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<{
  forkCount: number;
  stargazers: number;
  watchCount: number;
  openIssues: number;
}> = ({ forkCount, stargazers, watchCount, openIssues }) => {
  const data = {
    labels: ["forks", "stargazers", "watch", "issues"],
    datasets: [
      {
        label: "# of Votes",
        data: [forkCount, stargazers, watchCount, openIssues],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
        ],
        borderWidth: 0,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
