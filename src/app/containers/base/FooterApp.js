import React from 'react';
import Footer from '../../components/base/Footer';

class FooterApp extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer/>
    );
  }
}

export default FooterApp