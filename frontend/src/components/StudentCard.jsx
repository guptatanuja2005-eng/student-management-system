import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../styles/studentCard.css";

function StudentCard({ student, onEdit, onDelete }) {

  const navigate = useNavigate();

  return (

    <div className="student-card">

      <h3>{student.name}</h3>

      <p>{student.email}</p>

      <p>{student.department}</p>

      <span
        className={
          student.status === "Active"
            ? "active"
            : "inactive"
        }
      >
        {student.status}
      </span>

      <div className="student-actions">

        <button
          className="view-btn"
          onClick={() =>
            navigate(`/students/${student.id}`)
          }
        >
          <FaEye />
        </button>

        <button
          className="edit-btn"
          onClick={onEdit}
        >
          <FaEdit />
        </button>

        <button
          className="delete-btn"
          onClick={onDelete}
        >
          <FaTrash />
        </button>

      </div>

    </div>

  );

}

export default StudentCard;