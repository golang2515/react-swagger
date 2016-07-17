import React from 'react';
import Header from '../../components/base/Header';

class HeaderApp extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header/>
    );
  }
}
export default HeaderApp