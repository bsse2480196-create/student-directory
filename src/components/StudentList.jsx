import StudentCard from "./StudentCard.jsx";

function StudentList({ students, onView, onDelete }) {
  if (students.length === 0) {
    return <p className="text-center text-muted my-5">No students found.</p>;
  }

  return (
    <div className="row g-4 justify-content-center">
      {students.map((student) => (
        <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
          <StudentCard student={student} onView={onView} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
