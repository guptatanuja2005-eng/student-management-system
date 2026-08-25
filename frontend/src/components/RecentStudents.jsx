import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/recentStudents.css";

function RecentStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {

    try {

      const res = await api.get("/students");

      setStudents(res.data.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="recent-container">

      <h2>Recent Students</h2>

      <table>

        <thead>

          <tr>

            <th>Image</th>

            <th>Name</th>

            <th>Department</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>

              <td>{student.department}</td>

              <td>

                <span
                  className={
                    student.status === "Active"
                      ? "active"
                      : "inactive"
                  }
                >
                  {student.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentStudents;