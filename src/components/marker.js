import React from 'react';
import './marker.css';

class Marker extends React.Component {
  constructor() {
    super();
  }

  render() {
    let classes = 'marker';
    if (this.props.selected) {
      classes += ' selected';
    }

    return (
      <div className={classes}>
        {this.props.text}
        {this.props.textPrice}
      </div>
    );
  }
}

export default Marker;
