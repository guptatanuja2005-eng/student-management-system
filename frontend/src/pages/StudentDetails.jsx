import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import LoadingSpinner from "../components/LoadingSpinner";
import api from "../services/api";
import { toast } from "react-toastify";

import "../styles/studentDetails.css";

function StudentDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {

    try {

      const res = await api.get(`/students/${id}`);

      setStudent(res.data.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load student");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingSpinner />
      </DashboardLayout>
    );
  }

  if (!student) {
    return (
      <DashboardLayout>
        <h2>Student Not Found</h2>
      </DashboardLayout>
    );
  }

  return (

    <DashboardLayout>

      <div className="student-details">

        <button
          className="back-btn"
          onClick={() => navigate("/students")}
        >
          ← Back
        </button>

        <div className="details-card">

          <h2>{student.name}</h2>

          <table>

            <tbody>

              <tr>
                <td><strong>Email</strong></td>
                <td>{student.email}</td>
              </tr>

              <tr>
                <td><strong>Department</strong></td>
                <td>{student.department}</td>
              </tr>

              <tr>
                <td><strong>Phone</strong></td>
                <td>{student.phone}</td>
              </tr>

              <tr>
                <td><strong>Gender</strong></td>
                <td>{student.gender}</td>
              </tr>

              <tr>
                <td><strong>Status</strong></td>
                <td>{student.status}</td>
              </tr>

              <tr>
                <td><strong>Address</strong></td>
                <td>{student.address}</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>

  );

}

export default StudentDetails;