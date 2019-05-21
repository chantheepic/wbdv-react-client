import React from 'react'
import ModuleList from './moduleList'
import TopicPills from './topicPills'
import LessonTabs from './lessonTabs'
import WidgetList from './widgetList'
import CloseIcon from '@material-ui/icons/Close'

export default class CourseEditor extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-start">
            <a href="" className="navbar-brand">
              <div className="row">
                <CloseIcon />
                <h5 className="col-10 d-none d-md-block">Course Editor</h5>
              </div>
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