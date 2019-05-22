import React from 'react'

export default class LessonTab extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link rounded-0 text-white" href="#" onClick={this.props.selectLesson.bind(this, this.props.title)}>{this.props.title}</a>
      </li>
    )
  }
}
