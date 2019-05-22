import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ModuleList from './moduleList'
import TopicPills from './topicPills'
import LessonTabs from './lessonTabs'
import WidgetList from './widgetList'
import CloseIcon from '@material-ui/icons/Close'

export default class CourseEditor extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props.course[0])}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-start">
            <Link to="/courselist" className="p-0 mr-3 btn text-white"><CloseIcon /></Link>
            <a href="" className="navbar-brand">
              <h5 className="m-0 d-none d-md-block">{this.props.course[0].title}</h5>
            </a>
            <LessonTabs />
          </div>
        </nav>

        <nav className="container-fluid row">
          <ModuleList />

          <div className="col-9">
            <div className="row">
              <TopicPills />
            </div>
            <WidgetList />
          </div>
        </nav>
      </div>
    )
  }
}