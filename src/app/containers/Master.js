import React from 'react';
import {connect} from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import FooterApp from './base/FooterApp';
import HeaderApp from './base/HeaderApp';
import HeaderTopApp from './base/HeaderTopApp';
import NavBarApp from './base/NavBarApp';
import { bindActionCreators } from 'redux';
import * as NavTopActions from '../actions/actions_navtop';

let styles={
  containner:{
    paddingLeft:255,
    paddingRight:0,
  }
};

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.handleStickyNavBarStateChange=this.handleStickyNavBarStateChange.bind(this);
  }

  handleStickyNavBarStateChange(e){
    this.props.actions.navTopActions.showHideNavTop(e);
  }

  render() {
    let containner={
        paddingLeft:this.props.layout.data.paddingLeft,
        paddingRight:0,
      }
    return (
      <div>
          <StickyContainer>
            <HeaderTopApp/>
            <Sticky style={{zIndex: 9999}}>
              <HeaderApp/>
            </Sticky>
            <Sticky 
              style={{zIndex: 9999}}
              onStickyStateChange={this.handleStickyNavBarStateChange}>
              <div>
                <NavBarApp/>
              </div>
            </Sticky>
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


function mapDispatchToProps(dispatch) {
  return {
    actions:{
        navTopActions:bindActionCreators(NavTopActions, dispatch)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Master);

/*
      <div>
          <HeaderTopApp/>
          <StickyContainer>
            <Sticky style={{zIndex: 9999}}>
              <HeaderApp/>
            </Sticky>
              <Sticky style={{zIndex: 9999,topOffset:0}}>
                <NavBarApp/>
              </Sticky>
            <div style={containner}>
                {this.props.children}
            </div>
          </StickyContainer>
      </div>*/