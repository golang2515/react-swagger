import React from 'react';
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ApiGroupIcon from 'material-ui/svg-icons/action/list';
import ApiListIcon from 'material-ui/svg-icons/av/library-books';
import DebugIcon from 'material-ui/svg-icons/action/code';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import {Card, CardHeader} from 'material-ui/Card';


const styles={
  menuPanel:{
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'flex-start',
    width:250,
    position:'relative',
  },
};

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let open=this.props.layout.data.open;
    let top=this.props.top;
    return (
      <div style={styles.menuPanel}>
        <Drawer 
          width={250} 
          containerStyle={{overflow:'hidden',marginTop: (top==false)?40:0}}
          openSecondary={false} 
          docked={true}
          open={open}>
            <div>
              <Card>
                <CardHeader
                  style={{height:62,backgroundColor:'#eaeaea'}}
                  title="Api Manager"
                  titleStyle={{fontSize:'14pt',fontWeight:'bold',paddingTop:7}}
                  avatar="img/api-icon.png"
                />
              </Card>
              <Menu>
                <MenuItem 
                  primaryText="Home" 
                  containerElement={<Link to="/"/>}
                  leftIcon={<HomeIcon/>}/>
                <MenuItem 
                  primaryText="Group" 
                  containerElement={<Link to="/group"/>}
                  leftIcon={<ApiGroupIcon/>}/>
                <MenuItem 
                  primaryText="Debug" 
                  containerElement={<Link to="/debug"/>}
                  leftIcon={<DebugIcon/>}/>
                <MenuItem 
                  primaryText="Setting" 
                  containerElement={<Link to="/setting"/>}
                  leftIcon={<SettingIcon/>}/>
              </Menu>
            </div>
        </Drawer>
      </div>
    );
  }
}
