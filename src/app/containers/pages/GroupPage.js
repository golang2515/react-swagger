import React from 'react';

export default class GroupPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        GroupPage
      </div>
    );
  }
}
