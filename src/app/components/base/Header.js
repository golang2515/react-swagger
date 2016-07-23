import React from 'react';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SearchBar from '../customs/SearchBar';
import Avatar from 'material-ui/Avatar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import FullScreenIcon from 'material-ui/svg-icons/navigation/fullscreen';
import {Config} from '../../helpers/constant';

const styles={
  appBar:{
    paddingLeft:250,
  },
  titleStyle:{
    userSelect: 'none',
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowHide=this.handleShowHide.bind(this);
  }

  handleShowHide(e){
    let open=!this.props.layout.data.open;
    let layoutNew={
      open:open,
      paddingLeft:open==true?250:0
    };
    this.props.layoutAction.showHideNavBar(layoutNew);
  }

  render() {
    let layout=this.props.layout;
    return (
      <div style={{paddingLeft:layout.data.paddingLeft}}>
          <AppBar
            title={(this.props.layout.data.open==true)?"":Config.MODULE_NAME}
            zDepth={1}
            onLeftIconButtonTouchTap={this.handleShowHide}
            titleStyle={styles.titleStyle}
            iconElementRight={
              <div style={{backgroundColor:'transperent'}}>
                <Avatar size={35} style={{backgroundColor:'transperent'}} icon={<SearchIcon/>}/>
                <SearchBar/>
                <FlatButton label="Token"  style={{color:'#FFFFFF'}}/>
                <FlatButton label="Document"  style={{color:'#FFFFFF'}}/>
                <Avatar size={35} style={{backgroundColor:'transperent',cursor:'pointer'}} icon={<FullScreenIcon/>}/>
                <IconButton
                  iconStyle={{color:'#FFFFFF',backgroundColor:'transperent'}}
                  iconClassName="muidocs-icon-custom-github"
                  href="https://github.com/golang2515/react-swagger"
                />
              </div>
            }
          />
      </div>
    );
  }
}
