import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import StudentCard from "../components/StudentCard";
import AddStudentModal from "../components/AddStudentModal";
import EditStudentModal from "../components/EditStudentModal";
import LoadingSpinner from "../components/LoadingSpinner";
import api from "../services/api";
import { toast } from "react-toastify";

import "../styles/students.css";

function Students() {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {

    try {

      setLoading(true);

      const res = await api.get("/students");

      setStudents(res.data.data);

    } catch (error) {

      toast.error("Failed to load students");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchStudents();

  }, []);

  const deleteStudent = async (id) => {

    if (!window.confirm("Delete this student?")) return;

    try {

      await api.delete(`/students/${id}`);

      toast.success("Student Deleted");

      fetchStudents();

    } catch {

      toast.error("Delete Failed");

    }

  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {

    return (

      <DashboardLayout>

        <LoadingSpinner />

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div className="students-header">

        <h1>Students</h1>

        <button
          className="add-btn"
          onClick={() => setShowAdd(true)}
        >
          + Add Student
        </button>

      </div>

      <input
        className="search-input"
        placeholder="Search student..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="students-grid">

        {filteredStudents.map(student => (

          <StudentCard

            key={student.id}

            student={student}

            onEdit={()=>setSelectedStudent(student)}

            onDelete={()=>deleteStudent(student.id)}

          />

        ))}

      </div>

      {showAdd &&

      <AddStudentModal

      closeModal={()=>setShowAdd(false)}

      fetchStudents={fetchStudents}

      />

      }

      {selectedStudent &&

      <EditStudentModal

      student={selectedStudent}

      closeModal={()=>setSelectedStudent(null)}

      fetchStudents={fetchStudents}

      />

      }

    </DashboardLayout>

  );

}

export default Students;