import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function CourseForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState('');
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchCourses();
    }, []);
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/courses');
      setCourses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'course') setCourse(value);
    else if (name === 'file') setFile(e.target.files[0]);
  };
  const addSection = async (e) => {
    e.preventDefault();
    // Create a new FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('course', course);
    try {
      // Send the form data to the backend
      const response = await axios.post(
        'http://localhost:5000/sections',formData);
      if (response.status === 201) {
        Swal.fire('Good job!', 'Section added successfully!', 'success');
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error',error.response.data.message);
    }
  };
  return (
    <>
    <Navbar/>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Add Section</h6>
            <h1 className="mb-5">Section</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                <div className="row g-3">

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name"
                        onChange={handleChange} />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="file" className="form-control" id="file" name="file" placeholder="File"
                        onChange={handleChange}/>
                      <label htmlFor="file">File</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" id="description" name="description" placeholder="Description"
                        onChange={handleChange} />
                      <label htmlFor="description">Description</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select" id="course" name="course"
                        onChange={handleChange} >
                        <option value="">Select Course</option>
                         {courses.map((course) => (
                            <option key={course._id} value={course._id}> {course.title}</option>
                          ))}
                      </select>
                      <label htmlFor="course">Course</label>
                    </div>
                  </div>
                   
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit" 
                      onClick={addSection} >Add Section </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}