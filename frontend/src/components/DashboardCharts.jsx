import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

import "../styles/dashboardCharts.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function DashboardCharts({ total, active, inactive }) {

  const pieData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [active, inactive],
        backgroundColor: [
          "#22c55e",
          "#ef4444"
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Students"],

    datasets: [
      {
        label: "Total",
        data: [total],
        backgroundColor: "#2563eb",
      },
      {
        label: "Active",
        data: [active],
        backgroundColor: "#22c55e",
      },
      {
        label: "Inactive",
        data: [inactive],
        backgroundColor: "#ef4444",
      },
    ],
  };

  return (

    <div className="charts">

      <div className="chart-box">

        <h3>Student Status</h3>

        <Pie data={pieData} />

      </div>

      <div className="chart-box">

        <h3>Student Analytics</h3>

        <Bar data={barData} />

      </div>

    </div>

  );

}

export default DashboardCharts;