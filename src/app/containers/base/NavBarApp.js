import React from 'react';
import NavBar from '../../components/base/NavBar';
import {connect} from 'react-redux';

class NavBarApp extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavBar layout={this.props.layout}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout:state.layout
  };
}

export default connect(mapStateToProps)(NavBarApp);