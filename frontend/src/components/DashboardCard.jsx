import "../styles/dashboardCard.css";

function DashboardCard({ title, value, color, icon }) {
  return (
    <div
      className="dashboard-card"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <div className="card-icon">{icon}</div>

      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;