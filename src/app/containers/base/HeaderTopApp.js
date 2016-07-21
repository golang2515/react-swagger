import React from 'react';
import HeaderTop from '../../components/base/HeaderTop';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LayoutActions from '../../actions/actions_layout';

class HeaderTopApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderTop layoutAction={this.props.actions.layoutAction} layout={this.props.layout}/>
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
        layoutAction:bindActionCreators(LayoutActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTopApp);