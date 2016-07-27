  import React from 'react';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {Config} from '../../config/constant';

const styles={
  appBar:{
    paddingLeft:0,
  },
  titleStyle:{
    userSelect: 'none',
    marginTop:-8,
    fontSize:'15pt',
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
            title={Config.PROJECT_NAME}
          	showMenuIconButton={true}
            style={{height:Config.LAYOUT.HEADERTOP.HEIGHT,backgroundColor:'#00ACC1'}}
            zDepth={2}
            titleStyle={styles.titleStyle}
            iconElementLeft={
              <Avatar src="img/logo-top.png" style={{backgroundColor:'transperent',marginTop:4}} />
            }
          />
      </div>
    );
  }
}
