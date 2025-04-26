// frontend/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-8 text-center">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="display-4 mb-4">Student Management System</h1>
              <p className="lead mb-4">
                Welcome to the Student Management System. This application allows you to manage student records efficiently.
              </p>
              <div className="d-grid gap-3 d-md-flex justify-content-md-center">
                <Link to="/students" className="btn btn-primary btn-lg px-4">
                  View Students
                </Link>
                <Link to="/students/add" className="btn btn-outline-primary btn-lg px-4">
                  Add New Student
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card student-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title">Add</h3>
                  <p className="card-text">Add new student records to the system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card student-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title">View</h3>
                  <p className="card-text">View all student records in the system.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card student-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title">Manage</h3>
                  <p className="card-text">Edit or delete existing student records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;