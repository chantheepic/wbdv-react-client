import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CourseRow from './courseRow'
import GridIcon from '@material-ui/icons/ViewModule'
import SortIcon from '@material-ui/icons/SortByAlpha'

export default class CourseTable extends React.Component {
  renderListOfCourses = () => {
    let courses = this.props.courses.map((courses) => {
        return <CourseRow title={courses.title} id={courses.id} removeCourse={this.props.removeCourse}/>
      });
    return courses;
  }

  render() {
    return (
      <div>
        <nav className="bg-light">
          <div className="container">
            <ul className="row list-group list-group-horizontal-sm list-unstyled">
              <li className="list-item col-lg-5 col-sm-8 d-none d-sm-block">
                <a className="btn" href="#" role="button">Title</a>
              </li>
              <li className="list-item col-lg-3 d-none d-lg-block">
                <a className="btn" href="#" role="button">Owned By</a>
              </li>
              <li className="list-item col-lg-3 d-none d-lg-block">
                <a className="btn" href="#" role="button">Last Modified By</a>
              </li>
              <li className="list-item col-lg-1 col-sm-4">
                <div className="row">
                  <Link to="/courselist/grid" className="btn col-6 px-0" href="#" role="button"><GridIcon /></Link>
                  <a className="btn col-6 px-0" href="#" role="button"><SortIcon /></a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <ul className="list-group" id="courselist">
            <hr className="my-2" />
            <h5>Today</h5>
            {this.renderListOfCourses()}
          </ul>
          <ul className="list-group" id="courselist">
            <hr className="my-2" />
            <h5>7 Days</h5>
          </ul>
        </div>
      </div>
    )
  }
}