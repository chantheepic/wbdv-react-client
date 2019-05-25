import React from 'react'

export default class Module extends React.Component {
  render() {
    return (
      <button className={`btn btn-dark m-1 rounded p-2 ${this.props.active}`} onClick={this.props.selectModule.bind(this, this.props.id)}>
        <div className="float-left p-2" >{this.props.title}</div>
      </button>
    )
  }
}