function StudentCard({ student, onView, onDelete }) {
  const { id, name, major, year, gpa } = student;

  return (
    <div className="card h-100 shadow-sm student-card">
      <div className="avatar-box d-flex align-items-end justify-content-center">
        <svg viewBox="0 0 100 70" width="100%" height="100%" preserveAspectRatio="xMidYMax meet" aria-label={`${name} avatar`}>
          <circle cx="50" cy="26" r="13" fill="#8a8d91" />
          <path d="M22 70c0-16 12-26 28-26s28 10 28 26z" fill="#8a8d91" />
        </svg>
      </div>

      <div className="card-body">
        <h5 className="card-title fs-4">{name}</h5>
        <p className="card-text mb-3">
          ID: {id}<br />
          Major: {major}<br />
          Year: {year}<br />
          GPA: {gpa.toFixed(1)}
        </p>
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-primary" onClick={() => onView(student)}>
            View Profile
          </button>
          <button className="btn btn-outline-danger" onClick={() => onDelete(student)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
