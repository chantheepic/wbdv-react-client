import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CourseService from './courseService'
import ModuleList from './moduleList'
import TopicPills from './topicPills'
import LessonTabs from './lessonTabs'
import WidgetList from './widgetList'
import CloseIcon from '@material-ui/icons/Close'
import uuid from 'uuid'

export default class CourseEditor extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.getInstance();
    this.state = {
      id: '',
      title: '',
      course: '',
      selectedModule: '',
      selectedLesson: '',
      selectedTopic: '',
    };
  }

  componentWillMount() {
    let query = new URLSearchParams(this.props.location.search);
    let givenID = query.get('id');
    let courseService = CourseService.getInstance();
    let givenCourse = courseService.findCourseById(givenID);
    this.setState({ id: givenID });
    this.setState({ course: givenCourse });
    this.setState({ title: givenCourse[0].title });
  }

  selectModule = (moduleId) => {
    let md = this.state.course[0].modules.filter((module) => {
      return module.id === moduleId
    });
    this.setState({ selectedModule: md });
    this.setState({ selectedLesson: '' });
    this.setState({ selectedTopic: '' });
  }

  selectLesson = (lessonId) => {
    let l = this.state.selectedModule[0].lessons.filter((lesson) => {
      return lesson.id === lessonId
    })
    this.setState({ selectedLesson: l });
    this.setState({ selectedTopic: '' });
  }

  selectTopic = (topicId) => {
    let t = this.state.selectedLesson[0].topics.filter((topic) => {
      return topic.id === topicId
    })
    this.setState({ selectedTopic: t });
  }

  addModule = () => {
    let d = this.state.course;
    d[0].modules.push({ id: uuid.v4(), title: 'Untitled Module', lessons: [] })
    this.setState({ course: d });
    // let courseService = CourseService.getInstance();
    // console.log(courseService.findAllCourses())
  }

  addLesson = () => {
    let d = this.state.selectedModule;
    d[0].lessons.push({ id: uuid.v4(), title: 'Untitled Lesson', topics: [] })
    this.setState({ selectedModule: d });
    // let courseService = CourseService.getInstance();
    // console.log(courseService.findAllCourses())
  }

  addTopic = () => {
    let d = this.state.selectedLesson;
    d[0].topics.push({ id: uuid.v4(), title: 'Untitled Topic', topics: [] })
    this.setState({ selectedLesson: d });
    // let courseService = CourseService.getInstance();
    // console.log(courseService.findAllCourses())
  }

  removeModule = () => {
    if (this.state.selectedModule !== '') {
      let d = this.state.course;
      d[0].modules = d[0].modules.filter((module) => {
        return module.id !== this.state.selectedModule[0].id
      });
      this.setState({ course: d });
      this.setState({ selectedModule: '' });
      this.setState({ selectedLesson: '' });
      this.setState({ selectedTopic: '' });
    }
  }

  removeLesson = () => {
    if (this.state.selectedLesson !== '') {
      let d = this.state.selectedModule;
      d[0].lessons = d[0].lessons.filter((lesson) => {
        return lesson.id !== this.state.selectedLesson[0].id
      });
      this.setState({ selectedModule: d });
      this.setState({ selectedLesson: '' });
      this.setState({ selectedTopic: '' });
    }
  }

  removeTopic = () => {
    if (this.state.selectedTopic !== '') {
      let d = this.state.selectedLesson;
      d[0].topics = d[0].topics.filter((topic) => {
        return topic.id !== this.state.selectedTopic[0].id
      });
      this.setState({ selectedLesson: d });
      this.setState({ selectedTopic: '' });
    }
  }

  updateModule = (title) => {
    if (this.state.selectedModule !== '') {
      let d = this.state.selectedModule;
      d[0].title = title;
      this.setState({ selectedModule: d });
    }
  }

  updateLesson = (title) => {
    if (this.state.selectedLesson !== '') {
      let d = this.state.selectedLesson;
      d[0].title = title;
      this.setState({ selectedLesson: d });
    }
  }

  updateTopic = (title) => {
    if (this.state.selectedTopic !== '') {
      let d = this.state.selectedTopic;
      d[0].title = title;
      this.setState({ selectedTopic: d });
    }
  }

  renderModules = () => {
    if (this.state.course !== '') {
      return <ModuleList
        modules={this.state.course[0].modules}
        selectModule={this.selectModule}
        removeModule={this.removeModule}
        addModule={this.addModule}
        updateModule={this.updateModule} />
    } else {
      return <ModuleList modules={''} updateModule={this.updateModule} />
    }
  }

  renderLessons = () => {
    if (this.state.selectedModule !== '') {
      return <LessonTabs
        lessons={this.state.selectedModule[0].lessons}
        selectLesson={this.selectLesson}
        removeLesson={this.removeLesson}
        addLesson={this.addLesson}
        updateLesson={this.updateLesson} />
    } else {
      return <LessonTabs lessons={''} updateLesson={this.updateLesson} />
    }
  }

  renderTopics = () => {
    if (this.state.selectedLesson !== '') {
      return <TopicPills
        topics={this.state.selectedLesson[0].topics}
        selectTopic={this.selectTopic}
        removeTopic={this.removeTopic}
        addTopic={this.addTopic}
        updateTopic={this.updateTopic} />
    } else {
      return <TopicPills topics={''} updateTopic={this.updateTopic} />
    }
  }

  renderWidgets = () => {
    if (this.state.selectedTopic !== '') {
      return <WidgetList widgets={this.state.selectedTopic[0].widgets} />
    } else {
      return <WidgetList widgets={''} />
    }
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid justify-content-start">
            <Link to="/courselist" className="p-0 mr-3 btn text-white"><CloseIcon /></Link>
            <Link to="/courselist" className="text-white btn">
              <h5 className="m-0 d-none d-md-block">{this.state.title}</h5>
            </Link>
            {this.renderLessons()}
          </div>
        </nav>

        <nav className="container-fluid row">
          {this.renderModules()}
          <div className="col-9">
            <div className="row">
              {this.renderTopics()}
            </div>
            {this.renderWidgets()}
          </div>
        </nav>
      </div>
    )
  }
}