import "../styles/dashboardPreview.css";

function DashboardPreview() {
  return (
    <section className="dashboard-preview">

      <div className="preview-text">
        <h2>Dashboard Preview</h2>

        <p>
          View student records, attendance, courses,
          and reports from one modern dashboard.
        </p>
      </div>

      <div className="preview-image">
        <img src={dashboard} alt="Dashboard Preview" />
      </div>

    </section>
  );
}

export default DashboardPreview;