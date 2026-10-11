import { useState } from "react";
import AppNavbar from "./components/AppNavbar.jsx";
import PageBreadcrumb from "./components/PageBreadcrumb.jsx";
import StudentList from "./components/StudentList.jsx";
import PaginationBar from "./components/PaginationBar.jsx";
import AlertMessage from "./components/AlertMessage.jsx";
import Footer from "./components/Footer.jsx";
import { initialStudents } from "./data/students.js";

const PAGE_SIZE = 4;

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const [alert, setAlert] = useState({
    type: "info",
    message: "Student records have been successfully updated.",
  });

  const totalPages = Math.max(1, Math.ceil(students.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const visibleStudents = students.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePageChange = (next) => {
    if (next >= 1 && next <= totalPages) setCurrentPage(next);
  };

  const handleView = (student) =>
    setAlert({ type: "info", message: `Viewing profile of ${student.name} (ID: ${student.id}).` });

  const handleDelete = (student) => {
    setStudents((prev) => prev.filter((s) => s.id !== student.id));
    setAlert({ type: "danger", message: `${student.name} was removed from the directory.` });
  };

  const handleAdd = () => {
    const nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 101;
    const newStudent = { id: nextId, name: `New Student ${nextId}`, major: "Computer Science", year: 1, gpa: 3.0 };
    const updated = [...students, newStudent];
    setStudents(updated);
    setCurrentPage(Math.ceil(updated.length / PAGE_SIZE));
    setAlert({ type: "success", message: `${newStudent.name} was added to the directory.` });
  };

  return (
    <>
      <AppNavbar brand="StudentPortal" links={["Dashboard", "Students", "Courses", "Reports"]} />

      <main className="container">
        <PageBreadcrumb items={["Home", "Students", "Directory"]} />

        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
          <h1 className="h2 mb-0">Student Directory</h1>
          <button className="btn btn-primary add-btn" onClick={handleAdd}>
            Add New Student
          </button>
        </div>

        <StudentList students={visibleStudents} onView={handleView} onDelete={handleDelete} />

        <PaginationBar currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />

        <div className="px-lg-4">
          <AlertMessage type={alert?.type} message={alert?.message} onClose={() => setAlert(null)} />
        </div>
      </main>

      <Footer
        links={["Home", "Computer Science", "Courses", "Reports"]}
        contact={{ phone: "+1: 123 456 7890", email: "trm@studentportal.com" }}
      />
    </>
  );
}

export default App;
