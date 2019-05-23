import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CourseGrid from './courseGrid'
import CourseList from './courseList'
import CourseService from './courseService'
import CourseEditor from './courseEditor'
import uuid from 'uuid'

export default class Whiteboard extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.getInstance();
    this.state = {
      courses: this.courseService.findAllCourses(),
      title: ''
    };
  }

  removeCourse = (id) => {
    this.courseService.deleteCourse(id);
    this.setState({ courses: this.courseService.findAllCourses() });
  }

  newCourse = () => {
    if (this.state.title === "") {
      this.courseService.createCourse({ id: uuid.v4(), title: 'Untitled Course', modules: [] });
    } else {
      this.courseService.createCourse({ id: uuid.v4(), title: this.state.title, modules: [] });
    }
    this.setState({ title: '' });
  }

  render() {
    return (
      <Router>
        <Route path="/courselist" render={props => (
          <nav className="navbar navbar-dark bg-primary">
            <a href="" className="navbar-brand">
              <div className="row">
                <MenuIcon />
                <h5 className="col-10 d-none d-md-block">Course Manager</h5>
              </div>
            </a>
            <form className="form-inline">
              <input className="form-control mr-lg-2 col-auto" type="text" placeholder="New Course Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
              <a className="btn btn-light my-2 my-lg-0 col-sm-auto" href="#" role="button" onClick={this.newCourse}>Add Course</a>
            </form>
          </nav>
        )} />
        <Route exact path="/courselist/grid" render={props => (
          <CourseGrid courses={this.state.courses} removeCourse={this.removeCourse} />
        )} />
        <Route exact path="/courselist" render={props => (
          <CourseList courses={this.state.courses} removeCourse={this.removeCourse} />
        )} />
        <Route path="/courseeditor" component={CourseEditor} />
      </Router>)
  }
}