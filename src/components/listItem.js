import React from 'react'
import DocIcon from '@material-ui/icons/Description'
import CloseIcon from '@material-ui/icons/Close'

export default class GridRibbon extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <ul className="row list-unstyled">
          <li className="list-item col-lg-5 col-11">
            <div className="row">
              <DocIcon />
              <div className="col-11">{this.props.title}</div>
            </div>
          </li>
          <li className="list-item col-lg-3 d-none d-lg-block">me</li>
          <li className="list-item col-lg-3 d-none d-lg-block">6:35 PM</li>
          <li className="list-item col-1">
            <span className="float-right"><CloseIcon /></span>
          </li>
        </ul>
      </li>)
  }
}