import React from 'react'
import ListItem from './listItem'
import GridIcon from '@material-ui/icons/ViewModule'
import SortIcon from '@material-ui/icons/SortByAlpha'

export default class CourseList extends React.Component {
  renderListOfCourses() {
    let courses = this.props.courses
      .map(function (courses) {
        return <ListItem title={courses.title} key={courses.id} />
      });
    return courses;
  }

  render() {
    return (
      <div>
        <nav className="bg-light d-none d-lg-block">
          <div className="container">
            <ul className="row list-group list-group-horizontal-lg list-unstyled">
              <li className="list-item col-lg-5">
                <a className="btn" href="#" role="button">Title</a>
              </li>
              <li className="list-item col-lg-3">
                <a className="btn" href="#" role="button">Owned By</a>
              </li>
              <li className="list-item col-lg-3">
                <a className="btn" href="#" role="button">Last Modified By</a>
              </li>
              <li className="list-item col-lg-1">
                <div className="row">
                  <a className="btn col-6" href="#" role="button"><GridIcon /></a>
                  <a className="btn col-6" href="#" role="button"><SortIcon /></a>
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
            <ListItem title='Title 1' />
            <ListItem title='Title 1' />
          </ul>
        </div>
      </div>
    )
  }
}