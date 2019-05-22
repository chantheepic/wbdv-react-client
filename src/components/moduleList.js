import React from 'react'
import Module from './module'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

export default class ModuleList extends React.Component {
  renderModules = () => {
    let modules = this.props.modules.map((module) => {
      return <Module title={module.title} id={module.id} selectModule={this.props.selectModule} />
    });
    return modules;
  }

  render() {
    return (
      <ul className="list-group col-3 bg-dark">
        <hr className="my-2" />
        {this.renderModules()}
        <li className="list-group-item m-1 rounded bg-dark text-white p-2 border-0">
          <button className="float-right btn text-white" onClick={this.props.removeModule}><CloseIcon /></button>
          <button className="float-right btn text-white" onClick={this.props.addModule}><AddIcon /></button>
        </li>
      </ul>
    )
  }
}