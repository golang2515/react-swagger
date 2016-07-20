import React from 'react';
import {connect} from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

import FooterApp from './base/FooterApp';
import HeaderApp from './base/HeaderApp';
import NavBarApp from './base/NavBarApp';

let styles={
  containner:{
    paddingLeft:255,
    paddingRight:0,
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
    let containner={
        paddingLeft:this.props.layout.data.paddingLeft,
        paddingRight:0,
      }
    return (
      <div>
        <StickyContainer>
          <Sticky style={{zIndex: 9999}}>
            <HeaderApp/>
          </Sticky>
          <div>
            <NavBarApp/>
          </div>
        	<div style={containner}>
              {this.props.children}
          </div>
        </StickyContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout:state.layout
  };
}

export default connect(mapStateToProps)(Master);