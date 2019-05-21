import React from 'react'
import ListItem from './listItem'
import AppsIcon from '@material-ui/icons/Apps'
import SortIcon from '@material-ui/icons/SortByAlpha'

export default class CourseList extends React.Component {
  render() {
    return (
      <div>
        <nav class="bg-light d-none d-lg-block">
          <div class="container">
            <ul class="row list-group list-group-horizontal-lg list-unstyled">
              <li class="list-item col-lg-5">
                <a class="btn" href="#" role="button">Title</a>
              </li>
              <li class="list-item col-lg-3">
                <a class="btn" href="#" role="button">Owned By</a>
              </li>
              <li class="list-item col-lg-3">
                <a class="btn" href="#" role="button">Last Modified By</a>
              </li>
              <li class="list-item col-lg-1">
                <div class="row">
                  <AppsIcon />
                  <SortIcon />
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <ul className="list-group" id="courselist">
            <hr className="my-2" />
            <h5>Today</h5>
            <ListItem title='Title 1' />
            <ListItem title='Title 1' />
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