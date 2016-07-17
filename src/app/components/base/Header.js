import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles={
  appBar:{
    paddingLeft:255,
/*    backgroundColor:'#7fdeea',*/
  }
}

export default class Header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.appBar}>
          <AppBar
            title="react-swagger"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            zDepth={2}
          />
      </div>
    );
  }
}
