import logo from './logo.svg';
import './App.css';
import Home from './views/Home/home';
import About from './views/About/about';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './views/Signup/signup';
import Signin from './views/Signin/signin';

import Listcategories from './views/ListCategories/listcategories';
import Listcourses from './views/ListCourses/listcourses';
import Listsections from './views/ListSections/listsections';
import Listquizs from './views/ListQuizs/listquizs';

import Addcategory from './views/AddCategory/addcategory';
import Addcourse from './views/AddCourse/addcourse';
import Addsection from './views/AddSection/addsection';
import Addquiz from './views/AddQuiz/addquiz';
import Listusers from './views/ListUsers/listusers';
import NotFound from './views/NotFound/notfound';
import Updatecategory from './views/UpdateCategory/updatecategory';
import Course from './views/Course/course';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<About/>} path="/About"/>

          <Route element={<Signup/>} path="/Signup"/>
          <Route element={<Signin/>} path="/Signin"/>

          <Route element={<Listcategories/>} path="/Listcategories"/>
          <Route element={<Listcourses/>} path="/Listcourses"/>
          <Route element={<Listsections/>} path="/Listsections"/>
          <Route element={<Listquizs/>} path="/Listquizs"/>
          <Route element={<Listusers/>} path="/Listusers"/>

          <Route element={<Addcategory/>} path="/Addcategory"/>
          <Route element={<Addcourse/>} path="/Addcourse"/>
          <Route element={<Addsection/>} path="/Addsection"/>
          <Route element={<Addquiz/>} path="/Addquiz"/>

          <Route element={<NotFound/>} path="/404"/>

          <Route element={<Course/>} path="/Course"/>
          <Route element={<Updatecategory/>} path="/updatecategory/:id"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
