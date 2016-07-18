import React from 'react';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';

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
            zDepth={2}
            iconElementRight={
              <div>
                <FlatButton label="Login"  style={{color:'#FFFFFF'}}/>
                <FlatButton label="Document"  style={{color:'#FFFFFF'}}/>
              </div>
            }
          />
      </div>
    );
  }
}
