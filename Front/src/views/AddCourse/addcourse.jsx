import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function CourseForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [trainer, setTrainer] = useState('');
  const [duree, setDuree] = useState('');
  const [nbetudiant, setNbetudiant] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch the categories to populate the category dropdown
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'trainer') setTrainer(value);
    else if (name === 'nbetudiant') setNbetudiant(value);
    else if (name === 'duree') setDuree(value);
    else if (name === 'category') setCategory(value);
    else if (name === 'file') setFile(e.target.files[0]);
  };
  const addCourse = async (e) => {
    e.preventDefault();
    // Create a new FormData object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('trainer', trainer);
    formData.append('nbetudiant', nbetudiant);
    formData.append('duree', duree);
    formData.append('category', category);
    formData.append('file', file);
    try {
      // Send the form data to the backend
      const response = await axios.post(
        'http://localhost:5000/courses',formData);
      if (response.status === 201) {
        Swal.fire('Good job!', 'Course added successfully!', 'success');
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error',error.response.data.message);
    }
  };
  return (
    <>
    <Navbar/>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-3 text-white animated slideInDown">Courses</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Courses</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Add Course</h6>
            <h1 className="mb-5">Course</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                <div className="row g-3">

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="title" name="title" placeholder="Title"
                        onChange={handleChange} />
                      <label htmlFor="title">Title</label>
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
                      <input type="text" className="form-control" id="trainer" name="trainer" placeholder="Trainer"
                        onChange={handleChange}/>
                      <label htmlFor="trainer">Trainer</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="nbetudiant" name="nbetudiant" placeholder="Number of Students"
                        onChange={handleChange}/>
                      <label htmlFor="nbetudiant">Number of Students</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="duree" name="duree" placeholder="Duration"
                        onChange={handleChange}/>
                      <label htmlFor="duree">Duration</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select className="form-select" id="category" name="category"
                        onChange={handleChange} >
                        <option value="">Select Category</option>
                         {categories.map((category) => (
                            <option key={category._id} value={category._id}> {category.name}</option>
                          ))}
                      </select>
                      <label htmlFor="category">Category</label>
                    </div>
                  </div>
                   
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit" 
                      onClick={addCourse} >Add Course </button>
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