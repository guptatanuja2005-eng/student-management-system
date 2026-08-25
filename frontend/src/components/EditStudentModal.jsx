import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

import "../styles/modal.css";

function EditStudentModal({ student, closeModal, fetchStudents }) {

  const [formData, setFormData] = useState({
    name: student.name || "",
    email: student.email || "",
    department: student.department || "",
    phone: student.phone || "",
    gender: student.gender || "",
    status: student.status || "Active",
    address: student.address || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Send normal JSON data
      await api.put(`/students/${student.id}`, {
        name: formData.name,
        email: formData.email,
        department: formData.department,
        phone: formData.phone,
        gender: formData.gender,
        status: formData.status,
        address: formData.address,
      });

      toast.success("Student Updated Successfully");

      fetchStudents();

      closeModal();

    } catch (error) {
      console.error("Update error:", error);

      toast.error(
        error.response?.data?.message || "Update Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Student</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={closeModal}
              disabled={loading}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditStudentModal;