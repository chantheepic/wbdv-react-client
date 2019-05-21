import React from 'react'
import DocIcon from '@material-ui/icons/Description'
import Ellipses from '@material-ui/icons/MoreVert'

export default class Card extends React.Component {
  render() {
    return (
      <a className="col-12 col-sm-6 col-md-4 col-lg-2 p-0 btn" href="#" role="button">
        <div className="card m-2 rounded-0">
          <img className="card-img-top rounded-0"
            src="https://picsum.photos/300/200" />
          <div className="card-footer rounded-0">
            <div className="row">
              <DocIcon />
              <div className="col-9">{this.props.title}</div>
            </div>
          </div>
        </div>
      </a>)
  }
}