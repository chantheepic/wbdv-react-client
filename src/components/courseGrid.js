import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Card from './card'
import ListIcon from '@material-ui/icons/ViewList'
import SortIcon from '@material-ui/icons/SortByAlpha'

export default class CourseGrid extends React.Component {
  renderGridOfCourses = () => {
    let courses = this.props.courses.map((courses) => {
      return <Card title={courses.title} id={courses.id} removeCourse={this.props.removeCourse} />
    });
    return courses;
  }

  render() {
    return (
      <div>
        <nav className="bg-light">
          <div className="container">
            <ul className="row list-group list-group-horizontal-sm list-unstyled">
              <li className="list-item col-lg-6 col-8 d-none d-sm-block">
                <a className="btn" href="#" role="button">Recent Documents</a>
              </li>
              <li className="list-item col-lg-5 d-none d-lg-block">
                <a className="btn" href="#" role="button">Owned By me</a>
              </li>
              <li className="list-item col-lg-1 col-sm-4 col-12">
                <div className="row">
                  <Link to="/courselist" className="btn col-6 px-0" href="#" role="button"><ListIcon /></Link>
                  <a className="btn col-6 px-0" href="#" role="button"><SortIcon /></a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container-fluid'>
          <div className='card-deck row'>
            {this.renderGridOfCourses()}
          </div>

        </div>
      </div>
    )
  }
}