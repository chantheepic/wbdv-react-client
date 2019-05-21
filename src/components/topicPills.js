import React from 'react'
import AddIcon from '@material-ui/icons/Add'

export default class TopicPills extends React.Component {
  render() {
    return (
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link m-1 p-2 bg-secondary text-white rounded-0" href="#">Topic 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link m-1 p-2 bg-secondary text-white rounded-0" href="#">Topic 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link m-1 p-2 bg-secondary text-white rounded-0" href="#">Topic 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link m-1 p-2 bg-secondary text-white rounded-0" href="#">Topic 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link m-1 p-2 bg-secondary text-white rounded-0" href="#"><AddIcon /></a>
        </li>
      </ul>
    )
  }
}