import React from 'react';
import Header from '../../components/base/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LayoutActions from '../../actions/actions_layout';

class HeaderApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header layoutAction={this.props.actions.layoutAction} layout={this.props.layout}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      layoutAction: bindActionCreators(LayoutActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);