import React from 'react'
import LessonTab from './lessonTab'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

export default class LessonTabs extends React.Component {
  renderLessons = () => {
    if (this.props.lessons !== '') {
      let lessons = this.props.lessons.map((lesson) => {
        return <LessonTab title={lesson.title} id={lesson.id} selectLesson={this.props.selectLesson} />
      });
      return lessons;
    }
  }

  render() {
    return (
      <ul className="nav nav-pills nav-fill">
        {this.renderLessons()}
        <li className="nav-item">
          <button className="nav-link rounded-0 text-white btn px-2" href="#" onClick={this.props.addLesson}><AddIcon /></button>
        </li>
        <li className="nav-item">
          <button className="nav-link rounded-0 text-white btn px-2" href="#" onClick={this.props.removeLesson}><CloseIcon /></button>
        </li>
      </ul>
    )
  }
}