import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

const s = {
  whiteSpace: 'nowrap',
  overflow: 'hidden'
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
              <button className="btn btn-block text-left px-0 mx-2 py-1" style={s}>
                {this.props.title}</button>
            </div>
            <div className="row justify-content-end">
              <button className="btn px-0 mx-2 py-0" onClick={this.props.removeCourse.bind(this, this.props.id)}><CloseIcon /></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}