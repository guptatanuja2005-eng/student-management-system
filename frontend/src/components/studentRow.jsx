import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function StudentRow({ student, onDelete, onEdit }) {

  const navigate = useNavigate();

  return (
    <tr>

      {/* Name */}
      <td>{student.name}</td>

      {/* Email */}
      <td>{student.email}</td>

      {/* Department */}
      <td>{student.department}</td>

      {/* Status */}
      <td>
        <span
          className={
            student.status === "Active"
              ? "status active"
              : "status inactive"
          }
        >
          {student.status || "Active"}
        </span>
      </td>

      {/* Actions */}
      <td>

        {/* View */}
        <button
          className="view-btn"
          onClick={() => navigate(`/students/${student.id}`)}
        >
          <FaEye />
        </button>

        {" "}

        {/* Edit */}
        <button
          className="edit-btn"
          onClick={() => onEdit(student)}
        >
          <FaEdit />
        </button>

        {" "}

        {/* Delete */}
        <button
          className="delete-btn"
          onClick={() => onDelete(student.id)}
        >
          <FaTrash />
        </button>

      </td>

    </tr>
  );
}

export default StudentRow;