import React from 'react'

export default class TopicPill extends React.Component {
  render() {
    return (
      <li className="">
        <button className={`m-1 p-2 rounded-0 btn btn-secondary ${this.props.active}`} onClick={this.props.selectTopic.bind(this, this.props.id)}>{this.props.title}</button>
      </li>
    )
  }
}
