import React from 'react';

export default class Error404 extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Error404</div>
    );
  }
}
