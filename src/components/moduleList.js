import React from 'react'
import Module from './module'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'

const fullHeight = {
  minHeight: '95vh'
};

export default class ModuleList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  renderModules = () => {
    let modules = this.props.modules.map((module) => {
      if (this.props.selectedModule !== '' && this.props.selectedModule[0].id === module.id) {
        return <Module title={module.title} id={module.id} selectModule={this.props.selectModule} active='active'/>
      } else {
        return <Module title={module.title} id={module.id} selectModule={this.props.selectModule} active=''/>
      }
    });
    return modules;
  }

  render() {
    return (
      <ul className="list-group col-3 bg-dark" style={fullHeight}>
        <hr className="my-2" />
        <li className="list-group-item m-1 rounded bg-dark text-white p-2 border-0">
          <div className="input-group">
            <button className="btn text-white" onClick={this.props.addModule}><AddIcon /></button>
            <button className="btn text-white" onClick={this.props.removeModule}><CloseIcon /></button>
            <input type="text" className="form-control bg-dark text-white" placeholder='Module Name' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
            <button className="btn text-white" onClick={this.props.updateModule.bind(this, this.state.title)}>Update</button>
          </div>
        </li>
        {this.renderModules()}
      </ul>
    )
  }
}