import React from 'react'
import DocIcon from '@material-ui/icons/Description'
import CloseIcon from '@material-ui/icons/Close'

export default class ListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item rounded-0">
        <ul className="row list-unstyled">
          <li className="list-item col-lg-5 col-10">
            <div className="row">
              <DocIcon />
              <button className="btn col-10 p-0 text-left">{this.props.title}</button>
            </div>
          </li>
          <li className="list-item col-lg-3 d-none d-lg-block">me</li>
          <li className="list-item col-lg-3 d-none d-lg-block">6:35 PM</li>
          <li className="list-item col-1">
            <button className="btn float-right p-0" onClick={this.props.removeCourse.bind(this, this.props.id)}><CloseIcon /></button>
            {console.log(this.props.id)}
          </li>
        </ul>
      </li>
    )
  }
}