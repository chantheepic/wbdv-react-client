import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'

const overflow = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipses'
};

export default class Card extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-2 p-0">
        <div className="card m-2 rounded-0">
          <img className="card-img-top rounded-0"
            src="https://picsum.photos/300/200" />
          <div className="card-footer rounded-0 px-2 py-0">
            <div className="row justify-content-start">
              <Link to={{ pathname: `/courseeditor/${this.props.id}`, state: { courseId: this.props.id } }} className="btn btn-block text-left px-0 mx-2 py-1" style={overflow}>
                {this.props.title}</Link>
            </div>
            <div className="row justify-content-end">
              <Link to="/courselist" className="btn px-0 mx-2 py-0" onClick={this.props.removeCourse.bind(this, this.props.id)}><CloseIcon /></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}