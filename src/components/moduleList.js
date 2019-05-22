import React from 'react'
import Module from './module'
import AddIcon from '@material-ui/icons/Add'

export default class ModuleList extends React.Component {
  render() {
    return (
      <ul className="list-group col-3 bg-dark">
        <hr className="my-2" />
        <li className="list-group-item m-1 rounded bg-dark text-white p-2 border-0"> <span className="float-right"><AddIcon /></span></li>
      </ul>
    )
  }
}