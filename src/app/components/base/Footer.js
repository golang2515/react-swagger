import React from 'react';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {Config} from '../../config/constant';

const styles={
  appBar:{
    padding:0,
  },
  titleStyle:{
    userSelect: 'none',
    marginTop:-8,
    fontSize:'15pt',
  }
}

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let layout=this.props.layout;
    return (
      <div style={styles.appBar}>
          <AppBar
            title={Config.POWERED_BY}
          	showMenuIconButton={false}
            style={{height:40,backgroundColor:'#00bcd4'}}
            zDepth={0}
            titleStyle={styles.titleStyle}
            iconElementRight={
              <Avatar src="img/logo-top.png" style={{backgroundColor:'transperent',marginTop:4}} />
            }
          />
      </div>
    );
  }
}
