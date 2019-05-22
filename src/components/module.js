import React from 'react'

export default class Module extends React.Component {
  render() {
    return (
      <li className="list-group-item m-1 rounded bg-secondary text-white p-2">
        <button className="float-left btn text-white m-0 pr-5" onClick={this.props.selectModule.bind(this, this.props.id)}>{this.props.title}</button>
      </li>
    )
  }
}