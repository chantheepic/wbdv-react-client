import React from 'react'
import Card from './card'
import AppsIcon from '@material-ui/icons/Apps'
import SortIcon from '@material-ui/icons/SortByAlpha'

export default class CourseGrid extends React.Component {
  render() {
    return (
      <div>
        <nav className="bg-light d-none d-lg-block">
          <div className="container">
            <ul className="row list-group list-group-horizontal-lg list-unstyled">
              <li className="list-item col-lg-5">
                <a className="btn" href="#" role="button">Recent Documents</a>
              </li>
              <li className="list-item col-lg-3">
                <a className="btn" href="#" role="button">Owned By me</a>
              </li>
              <li className="list-item col-lg-3">
                <a className="btn" href="#" role="button">Last Modified By</a>
              </li>
              <li className="list-item col-lg-1">
                <div className="row">
                  <AppsIcon />
                  <SortIcon />
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container-fluid'>
          <div className='card-deck row'>
            <Card title='Title 1' />
            <Card title='title 2' />
            <Card title='title 3' />
            <Card title='title 4' />
            <Card title='title 5' />
            <Card title='title 6' />
            <Card title='title 7' />
            <Card title='title 8' />
          </div>
        </div>
      </div>
    )
  }
}