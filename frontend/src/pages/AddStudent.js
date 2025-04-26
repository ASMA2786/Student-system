// frontend/src/pages/AddStudent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import StudentForm from '../components/StudentForm';

const AddStudent = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    course: '',
    branch: '',
    dateOfBirth: '',
    address: '',
    phoneNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students', studentData);
      toast.success('Student added successfully');
      navigate('/students');
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error(error.response?.data?.error || 'Failed to add student');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Add New Student</h4>
            </div>
            <div className="card-body">
              <StudentForm
                studentData={studentData}
                setStudentData={setStudentData}
                handleSubmit={handleSubmit}
                buttonText="Add Student"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;