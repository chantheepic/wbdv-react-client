import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

export default class Widget extends React.Component {
  render() {
    return (
      <div>
        <div className="card rounded-0">
          <div className="card-body">
            <h5 className="card-title">
              Heading widget
                  <div className="float-right"><CloseIcon /></div>
            </h5>
            <div className="input-group input-group-sm mb-3">
              <input type="text" className="form-control" placeholder="Heading text" />
            </div>
            <div className="input-group input-group-sm mb-3">
              <input type="text" className="form-control" placeholder="Heading 1" />
            </div>
            <div className="input-group input-group-sm mb-3">
              <input type="text" className="form-control" placeholder="Widget name" />
            </div>
            <h5>Preview</h5>
            <h3>Heading text</h3>
          </div>
        </div>
        <hr className="my-3"></hr>
      </div>
    )
  }
}