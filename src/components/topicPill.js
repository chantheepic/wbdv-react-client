import React from 'react'

export default class TopicPill extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <button className="m-1 p-2 bg-secondary text-white rounded-0 btn" onClick={this.props.selectTopic.bind(this, this.props.id)}>{this.props.title}</button>
      </li>
    )
  }
}
