import React from 'react'

export default class LessonTab extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <button className={`nav-link rounded-0 text-white btn-dark btn ${this.props.active}`} onClick={this.props.selectLesson.bind(this, this.props.id)}>{this.props.title}</button>
      </li>
    )
  }
}
