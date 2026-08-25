import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/studentform.css";

function StudentForm({
  editingStudent,
  fetchStudents,
  closeModal,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState(null);

  useEffect(() => {

    if (editingStudent) {

      setName(editingStudent.name || "");
      setEmail(editingStudent.email || "");
      setDepartment(editingStudent.department || "");
      setPhone(editingStudent.phone || "");
      setStatus(editingStudent.status || "Active");

    }

  }, [editingStudent]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("department", department);
      formData.append("phone", phone);
      formData.append("status", status);

      if (image) {
        formData.append("image", image);
      }

      if (editingStudent) {

        await api.put(
          `/students/${editingStudent.id}`,
          formData
        );

        alert("Student Updated Successfully");

      } else {

        await api.post(
          "/students",
          formData
        );

        alert("Student Added Successfully");

      }

      setName("");
      setEmail("");
      setDepartment("");
      setPhone("");
      setStatus("Active");
      setImage(null);

      if (fetchStudents) {
        fetchStudents();
      }

      if (closeModal) {
        closeModal();
      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }

  };

  return (

    <form
      className="student-form"
      onSubmit={handleSubmit}
    >

      <h2>
        {editingStudent
          ? "Update Student"
          : "Add Student"}
      </h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e)=>setDepartment(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

      <select
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
      >
        <option value="Active">
          Active
        </option>

        <option value="Inactive">
          Inactive
        </option>

      </select>

      <button type="submit">

        {editingStudent
          ? "Update Student"
          : "Add Student"}

      </button>

    </form>

  );

}

export default StudentForm;