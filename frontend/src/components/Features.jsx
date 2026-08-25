import {
  FaUserGraduate,
  FaClipboardCheck,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

import "../styles/features.css";

function Features() {
  const data = [
    {
      icon: <FaUserGraduate />,
      title: "Student Management",
      description:
        "Add, edit and organize student records efficiently.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Attendance",
      description:
        "Track daily attendance with accuracy and ease.",
    },
    {
      icon: <FaChartLine />,
      title: "Reports",
      description:
        "Generate reports and monitor student performance.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure System",
      description:
        "Protect student data with secure authentication.",
    },
  ];

  return (
    <section id="features" className="features">

      <h2>Our Features</h2>

      <p>
        Everything you need to manage students in one place.
      </p>

      <div className="feature-container">

        {data.map((item, index) => (
          <div className="feature-card" key={index}>

            <div className="icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;