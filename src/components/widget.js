import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

export default class Widget extends React.Component {
  render() {
    return (
      <div>
        <div class="card rounded-0">
          <div class="card-body">
            <h5 class="card-title">
              Heading widget
                  <div className="float-right"><CloseIcon /></div>
            </h5>
            <div class="input-group input-group-sm mb-3">
              <input type="text" class="form-control" placeholder="Heading text" />
            </div>
            <div class="input-group input-group-sm mb-3">
              <input type="text" class="form-control" placeholder="Heading 1" />
            </div>
            <div class="input-group input-group-sm mb-3">
              <input type="text" class="form-control" placeholder="Widget name" />
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