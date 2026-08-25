import { Link } from "react-router-dom";
import heroImage from "../assets/Hero.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* Left Side */}
      <div className="hero-left">

        <span className="hero-badge">
          🎓 Welcome to StudentMS
        </span>

        <h1>
          Student Management
          <br />
          System
        </h1>

        <p>
          Manage students, attendance, courses and reports
          from one secure and easy-to-use platform.
        </p>

        {/* Feature Badges 
        <div className="hero-features">
          <div className="feature-box">✔ Easy to Use</div>
          <div className="feature-box">🔒 Secure</div>
          <div className="feature-box">📱 Responsive</div>
        </div>*/}

        {/* Dashboard Button */}
        <Link to="/dashboard" className="dashboard-btn">
          View Dashboard →
        </Link>

      </div>

      {/* Right Side */}
     <div className="hero-right">

  <div className="feature-box">
    <span className="feature-icon">👨‍🎓</span>

    <div>
      <h3>Student Records</h3>
      <p>Manage all students efficiently.</p>
    </div>
  </div>

  <div className="feature-box">
    <span className="feature-icon">📊</span>

    <div>
      <h3>Analytics</h3>
      <p>Real-time dashboard reports.</p>
    </div>
  </div>

  <div className="feature-box">
    <span className="feature-icon">🔒</span>

    <div>
      <h3>Secure Login</h3>
      <p>JWT Authentication.</p>
    </div>
  </div>

<div className="feature-box">
    <span className="feature-icon">📅</span>

    <div>
      <h3>Attendance Tracking</h3>
      <p>Track student attendance easily.</p>
    </div>
  </div>


</div>
    </section>
  );
}

export default Hero;