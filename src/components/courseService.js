export default class CourseService {
  static myInstance = null;
  courses = require('../components/courses.json')

  static getInstance() {
    if (CourseService.myInstance == null) {
      CourseService.myInstance = new CourseService();
    }
    return this.myInstance;
  }

  createCourse = (course) => {
    this.courses.push(course);
  }

  findAllCourses = () => {
    return this.courses;
  }

  deleteCourse = (id) => {
    this.courses = this.courses.filter((course) => { return course.id !== id });
  }

  findCourseById = (id) => {
    return this.courses.filter((course) => { return course.id === id });
  }

  updateCourse = (givenId, givenCourse) => {
    this.courses = this.courses.map((course) => {
      if (course.id === givenId) {
        return givenCourse
      } else {
        return course
      }
    });
    console.log(this.courses);
  }
}