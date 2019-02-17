import React from 'react';
import { Link } from 'gatsby';

class CallNow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="callnow">
        <div className="container">
          <a href="tel:999-999-9999">CLICK TO CALL OR DIAL 614-406-0997</a>
        </div>
      </div>
    );
  }
}

export default CallNow;
