// frontend/src/pages/EditStudent.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import StudentForm from '../components/StudentForm';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`https://student-management-backend-ruxb.onrender.com/students/${id}`);
        const student = response.data;
        
        // Format date for the date input
        const formattedDate = student.dateOfBirth ? 
          new Date(student.dateOfBirth).toISOString().split('T')[0] : '';
        
        setStudentData({
          ...student,
          dateOfBirth: formattedDate
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student:', error);
        toast.error('Failed to fetch student data');
        navigate('/students');
      }
    };

    fetchStudent();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://student-management-backend-ruxb.onrender.com/students/${id}`, studentData);
      toast.success('Student updated successfully');
      navigate('/students');
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error(error.response?.data?.error || 'Failed to update student');
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Edit Student</h4>
            </div>
            <div className="card-body">
              <StudentForm
                studentData={studentData}
                setStudentData={setStudentData}
                handleSubmit={handleSubmit}
                buttonText="Update Student"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
