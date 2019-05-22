import React from 'react'
import TopicPill from './topicPill'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

export default class TopicPills extends React.Component {
  renderTopics = () => {
    if (this.props.topics !== '') {
      let topics = this.props.topics.map((topic) => {
        return <TopicPill title={topic.title} id={topic.id} selectTopic={this.props.selectTopic} />
      });
      return topics;
    }
  }


  render() {
    return (
      <ul class="nav nav-pills">
        {this.renderTopics()}
        <li class="nav-item">
          <button class="m-1 p-2 bg-secondary text-white rounded-0 btn" onClick={this.props.addTopic}><AddIcon /></button>
        </li>
        <li class="nav-item">
          <button class="m-1 p-2 bg-secondary text-white rounded-0 btn" onClick={this.props.addTopic}><CloseIcon /></button>
        </li>
      </ul>
    )
  }
}