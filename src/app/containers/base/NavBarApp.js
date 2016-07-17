import React from 'react';
import NavBar from '../../components/base/NavBar';

class NavBarApp extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavBar/>
    );
  }
}

export default NavBarApp