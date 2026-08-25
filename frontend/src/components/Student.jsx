import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import SearchBar from "../components/SearchBar";
import api from "../services/api";

function Students() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [editingStudent, setEditingStudent] = useState(null);

  const [loading, setLoading] = useState(true);

  // Fetch students from backend
  const fetchStudents = async () => {

    try {

      const res = await api.get("/students", {
        params: {
          search
        }
      });

      setStudents(res.data.data);

    } catch (error) {

      console.log(error);

      alert("Failed to load students");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchStudents();

  }, [search]);

  // Delete Student
  const deleteStudent = async (id) => {

    if (!window.confirm("Delete Student?")) return;

    try {

      await api.delete(`/students/${id}`);

      alert("Student Deleted Successfully");

      fetchStudents();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }

  };

  // Edit Student
  const editStudent = (student) => {

    setEditingStudent(student);

  };

  if (loading) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="container">

      <h1>Student Management</h1>

      <StudentForm
        editingStudent={editingStudent}
        fetchStudents={fetchStudents}
      />

      <br />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StudentTable
        students={students}
        onDelete={deleteStudent}
        onEdit={editStudent}
      />

    </div>

  );

}

export default Students;