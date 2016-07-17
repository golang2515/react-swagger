import React from 'react';

import FooterApp from './base/FooterApp';
import HeaderApp from './base/HeaderApp';
import NavBarApp from './base/NavBarApp';

const styles={
  containner:{
    paddingLeft:255,
    paddingRight:5,
  }
};

class Master extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderApp/>
        <NavBarApp/>
      	<div style={styles.containner}>
            {this.props.children}
        </div>
        <FooterApp/>
      </div>
    );
  }
}
export default Master