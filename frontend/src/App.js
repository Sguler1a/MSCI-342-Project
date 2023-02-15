import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import MyCourses from'./components/pages/MyCourses'
import PlanCourses from'./components/pages/PlanCourses'
import CourseNotes from'./components/pages/CourseNotes'
import GradeCalculator from'./components/pages/GradeCalculator'
import Layout from'./components/pages/Layout'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />
        <div className='layout-main'>
          <Routes>
              <Route element={<Home />} path="/">

              </Route>
              <Route element={<Login />} path="/login">

              </Route>
              <Route element={<MyCourses />} path="/my-courses">

              </Route>
              <Route element={<PlanCourses />} path="/plan-courses">

              </Route>
              <Route element={<CourseNotes />} path="/course-notes">

              </Route>
              <Route element={<GradeCalculator />} path="/grade-calculator">

              </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
