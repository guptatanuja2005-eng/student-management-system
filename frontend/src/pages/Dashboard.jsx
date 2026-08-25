import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";
import LoadingSpinner from "../components/LoadingSpinner";

import api from "../services/api";

import {
  FaUserGraduate,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import "../styles/dashboard.css";


function Dashboard() {

  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    inactiveStudents: 0,
  });


  const fetchDashboard = async () => {

    try {

      const res = await api.get("/dashboard");

      console.log(res.data);

      // Handles both {data:{...}} and direct response {...}
      setStats(res.data.data || res.data);


    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    fetchDashboard();

  }, []);



  if (loading) {

    return (

      <DashboardLayout>

        <LoadingSpinner />

      </DashboardLayout>

    );

  }



  return (

    <DashboardLayout>


      <h1 className="dashboard-title">
        Dashboard
      </h1>



      <div className="dashboard-cards">


        <DashboardCard

          title="Total Students"

          value={stats?.totalStudents || 0}

          color="#2563eb"

          icon={<FaUserGraduate />}

        />



        <DashboardCard

          title="Active Students"

          value={stats?.activeStudents || 0}

          color="#16a34a"

          icon={<FaCheckCircle />}

        />



        <DashboardCard

          title="Inactive Students"

          value={stats?.inactiveStudents || 0}

          color="#ef4444"

          icon={<FaTimesCircle />}

        />


      </div>



      <DashboardCharts

        total={stats?.totalStudents || 0}

        active={stats?.activeStudents || 0}

        inactive={stats?.inactiveStudents || 0}

      />


    </DashboardLayout>

  );

}


export default Dashboard;