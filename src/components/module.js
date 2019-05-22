import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

export default class Module extends React.Component {
  render() {
    return (
      <li className="list-group-item m-1 rounded bg-secondary text-white p-2">{this.props.title}<span className="float-right"><CloseIcon /></span></li>
    )
  }
}
