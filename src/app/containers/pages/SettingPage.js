import React from 'react';

export default class SettingPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>SettingPage</div>
    );
  }
}
