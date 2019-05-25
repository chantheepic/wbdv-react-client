import React from 'react'
import TopicPill from './topicPill'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

export default class TopicPills extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  renderTopics = () => {
    if (this.props.topics !== '') {
      let topics = this.props.topics.map((topic) => {
        if (this.props.selectedTopic !== '' && this.props.selectedTopic[0].id === topic.id) {
          return <TopicPill title={topic.title} id={topic.id} selectTopic={this.props.selectTopic} active='active'/>
        } else {
          return <TopicPill title={topic.title} id={topic.id} selectTopic={this.props.selectTopic} active=''/>
        }
      });
      return topics;
    }
  }

  render() {
    return (
      <ul className="nav nav-pills">
        {this.renderTopics()}
        <li className="nav-item">
          <button className="m-1 p-2 bg-secondary text-white rounded-0 btn" onClick={this.props.addTopic}><AddIcon /></button>
        </li>
        <li className="nav-item">
          <button className="m-1 p-2 bg-secondary text-white rounded-0 btn" onClick={this.props.removeTopic}><CloseIcon /></button>
        </li>
        <li className="nav-item">
          <input type="text" className="m-2 p-2 form-control rounded-0" placeholder={this.state.placeholder} value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
        </li>
        <li className="nav-item">
          <button className="m-1 p-2 bg-secondary text-white rounded-0 btn" onClick={this.props.updateTopic.bind(this, this.state.title)}>Update</button>
        </li>
      </ul>
    )
  }
}