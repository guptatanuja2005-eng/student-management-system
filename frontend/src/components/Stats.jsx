import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaAward } from "react-icons/fa";
import "../styles/stats.css";

function Stats() {
  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "2500+",
      title: "Students",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "120+",
      title: "Teachers",
    },
    {
      icon: <FaBook />,
      number: "80+",
      title: "Courses",
    },
    {
      icon: <FaAward />,
      number: "98%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;