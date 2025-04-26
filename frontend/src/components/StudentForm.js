// frontend/src/components/StudentForm.js
import React from 'react';

const StudentForm = ({ studentData, setStudentData, handleSubmit, buttonText }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="rollNumber" className="form-label">Roll Number</label>
          <input
            type="text"
            className="form-control"
            id="rollNumber"
            name="rollNumber"
            value={studentData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={studentData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="course" className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            id="course"
            name="course"
            value={studentData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="branch" className="form-label">Branch</label>
          <input
            type="text"
            className="form-control"
            id="branch"
            name="branch"
            value={studentData.branch}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={studentData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea
          className="form-control"
          id="address"
          name="address"
          rows="3"
          value={studentData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">{buttonText}</button>
    </form>
  );
};

export default StudentForm;