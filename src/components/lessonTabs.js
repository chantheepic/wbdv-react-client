import React from 'react'
import LessonTab from './lessonTab'
import AddIcon from '@material-ui/icons/Add'

export default class LessonTabs extends React.Component {
  renderListOfLessons = () => {
    let course = this.props.course.map((lesson) => {
      return <LessonTab title={lesson.title} selectLesson={this.props.selectLesson} />
    });
    return course;
  }

  render() {
    return (
      <ul className="nav nav-pills nav-fill">
        {this.renderListOfLessons()}
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#"><AddIcon /></a>
        </li>
      </ul>
    )
  }
}

// title={course.title} id={course.id} removeCourse={this.props.removeCourse}