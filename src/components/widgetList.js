import React from 'react'
import Widget from './widget'

export default class WidgetList extends React.Component {
  renderWidgets = () => {
    if (this.props.widgets !== '') {
      let widgets = this.props.widgets.map((widget) => {
        return <Widget title={widget.title} id={widget.id} />
      });
      return widgets;
    }
  }

  render() {
    return (
      <div>
        <div className="row mb-4 justify-content-end">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link m-0 p-1 bg-success text-white rounded-0" href="#">Save</a>
            </li>
            <li class="nav-item btn-group-toggle">
              <a class="nav-link m-0 p-1 bg-secondary text-white rounded-0" href="#">Preview</a>
            </li>
          </ul>
        </div>
        {this.renderWidgets()}
      </div>
    )
  }
}