import React from 'react';
import NavBar from '../../components/base/NavBar';
import {connect} from 'react-redux';

class NavBarApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavBar layout={this.props.layout} top={this.props.top}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout:state.layout,
    top:state.top,
  };
}

export default connect(mapStateToProps)(NavBarApp);