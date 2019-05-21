import React from 'react'
import AddIcon from '@material-ui/icons/Add'

export default class LessonTabs extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white active" href="#">Build</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#">Theme</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#">Store</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#">Apps</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link rounded-0 text-white" href="#"><AddIcon /></a>
        </li>
      </ul>
    )
  }
}