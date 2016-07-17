import React from 'react';

import FooterApp from './base/FooterApp';
import HeaderApp from './base/HeaderApp';
import NavBarApp from './base/NavBarApp';

const styles={
  containner:{
    //paddingLeft:255,
    paddingRight:5,
    backgroundColor:'#eaeaea',
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
        
      	<div style={styles.containner}>
            {this.props.children}
        </div>

      </div>
    );
  }
}
export default Master