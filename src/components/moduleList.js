import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'

export default class ModuleList extends React.Component {
  render() {
    return (
      <ul className="list-group col-3 bg-dark">
        <hr className="my-2" />
        <li className="list-group-item m-1 rounded bg-secondary text-white p-2">Module 1 - jQuery <span className="float-right"><CloseIcon /></span></li>
        <li className="list-group-item m-1 rounded bg-primary text-white p-2">Module 2 - React <span className="float-right"><CloseIcon /></span></li>
        <li className="list-group-item m-1 rounded bg-secondary text-white p-2">Module 3 - Redux <span className="float-right"><CloseIcon /></span></li>
        <li className="list-group-item m-1 rounded bg-secondary text-white p-2">Module 4 - Native <span className="float-right"><CloseIcon /></span></li>
        <li className="list-group-item m-1 rounded bg-secondary text-white p-2">Module 5 - Angular <span className="float-right"><CloseIcon /></span></li>
        <li className="list-group-item m-1 rounded bg-dark text-white p-2 border-0"> <span className="float-right"><AddIcon /></span></li>
      </ul>
    )
  }
}