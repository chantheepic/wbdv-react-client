import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CourseService from './courseService'
import ModuleList from './moduleList'
import TopicPills from './topicPills'
import LessonTabs from './lessonTabs'
import WidgetList from './widgetList'
import CloseIcon from '@material-ui/icons/Close'

export default class CourseEditor extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.getInstance();
    this.state = {
      id: '',
      title: '',
      course: [],
      selectedLesson: '',
      selectedModule: '',
      selectedTopic: '',
    };
  }

  componentWillMount() {
    let query = new URLSearchParams(this.props.location.search);
    let givenID = query.get('id');
    let courseService = CourseService.getInstance();
    let givenCourse = courseService.findCourseById(givenID);
    this.setState({ id: givenID });
    this.setState({ course: givenCourse[0].modules });
    this.setState({ title: givenCourse[0].title });
  }

  selectLesson = (lesson) => {
    this.setState({selectedLesson: lesson});
  }

  getTopics = (lesson) => {
    // let topics = this.state.course.filter(() => )
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-start">
            <Link to="/courselist" className="p-0 mr-3 btn text-white"><CloseIcon /></Link>
            <a href="" className="navbar-brand">
              <h5 className="m-0 d-none d-md-block">{this.state.title}</h5>
            </a>
            <LessonTabs course={this.state.course} selectLesson={this.selectLesson} />
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