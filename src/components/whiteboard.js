import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CourseGrid from './courseGrid'
import CourseList from './courseList'

export default class Whiteboard extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a href="" className="navbar-brand">
            <div className="row">
              <MenuIcon />
              <h5 class="col-10 d-none d-md-block">Course Manager</h5>
            </div>
          </a>
          <form class="form-inline">
            <input class="form-control mr-lg-2 col-auto" type="search" placeholder="New Course Title" id="addcourseTitle" />
            <a class="btn btn-light my-2 my-lg-0 col-sm-auto" id="addcourseBtn" href="#" role="button">Add Course</a>
          </form>
        </nav>
        <CourseGrid />
        <CourseList />

      </div>)
  }
}