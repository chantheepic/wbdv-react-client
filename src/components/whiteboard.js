import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CourseGrid from './courseGrid'
import CourseList from './courseList'

export default class Whiteboard extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { title: 'Module 1 - jQuery', id: 123 },
        { title: 'Module 2 - React', id: 234 },
        { title: 'Module 3 - Redux', id: 345 },
        { title: 'Module 4 - Angular', id: 456 },
        { title: 'Module 5 - Node.js', id: 567 },
        { title: 'Module 6 - MongoDB', id: 678 },],

      title: ''
    };
  }

  newCourse = (e) => {
    if(this.state.title == ""){
      this.state.courses.push({title: 'Untitled Course', id:333});
    } else {
      this.state.courses.push({title: this.state.title, id:333});
    }
    this.setState({title:''});
  }

  newCourseTitle = (e) => this.setState({title: e.target.value});

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
          <form className="form-inline">
            <input className="form-control mr-lg-2 col-auto" type="text" placeholder="New Course Title" value={this.state.title} onChange={this.newCourseTitle} />
            <a className="btn btn-light my-2 my-lg-0 col-sm-auto" href="#" role="button" onClick={this.newCourse}>Add Course</a>
          </form>
        </nav>
        <CourseGrid courses={this.state.courses} />
        <CourseList courses={this.state.courses} />
      </div>)
  }
}