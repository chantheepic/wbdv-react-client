import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import DocIcon from '@material-ui/icons/Description'
import CloseIcon from '@material-ui/icons/Close'

const overflow = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipses'
};

export default class ListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item rounded-0">
        <ul className="row list-unstyled">
          <li className="list-item col-lg-5 col-10">
            <div className="row">
              <div className="mr-3"><DocIcon /></div>
              <Link to= {`/courseeditor/?id=${this.props.id}`} className="btn col-10 p-0 text-left" style={overflow}>{this.props.title}</Link>
            </div>
          </li>
          <li className="list-item col-lg-3 d-none d-lg-block">me</li>
          <li className="list-item col-lg-3 d-none d-lg-block">6:35 PM</li>
          <li className="list-item col-1">
            <button className="btn float-right p-0" onClick={this.props.removeCourse.bind(this, this.props.id)}><CloseIcon /></button>
          </li>
        </ul>
      </li>
    )
  }
}