import React from 'react';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const styles={
  appBar:{
    paddingLeft:0,
  },
  titleStyle:{
    userSelect: 'none',
  }
}

export default class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let layout=this.props.layout;
    return (
      <div style={styles.appBar}>
          <AppBar
          	showMenuIconButton={false}
            style={{height:35,backgroundColor:'#00ACC1'}}
            zDepth={2}
            titleStyle={styles.titleStyle}
          />
      </div>
    );
  }
}
