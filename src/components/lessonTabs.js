import React from 'react'
import LessonTab from './lessonTab'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

export default class LessonTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

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
      <ul className="nav nav-pills justify-content-end">
        {this.renderLessons()}
        <li className="nav-item">
          <button className="nav-link rounded-0 text-white btn px-2" onClick={this.props.addLesson}><AddIcon /></button>
        </li>
        <li className="nav-item">
          <button className="nav-link rounded-0 text-white btn px-2" onClick={this.props.removeLesson}><CloseIcon /></button>
        </li>
        <li>
          <input type="text" className="form-control px-2 rounded-0 bg-dark text-white" placeholder="Lesson Name" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
        </li>
        <li className="nav-item">
          <button className="btn text-white px-2" onClick={this.props.updateLesson.bind(this, this.state.title)}>Update</button>
        </li>
      </ul>
    )
  }
}