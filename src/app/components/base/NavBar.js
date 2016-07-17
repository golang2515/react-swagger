import React from 'react';
import { Link } from 'react-router'
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Delete from 'material-ui/svg-icons/action/delete';
const styles={
  menuPanel:{
    width:200,
  },
};

export default class NavBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer 
          width={250} 
          openSecondary={false} 
          open={true}>
            <div style={styles.menuPanel}>
              <Menu>
                <MenuItem 
                  primaryText="Home" 
                  containerElement={<Link to="/"/>}
                  leftIcon={<RemoveRedEye/>}/>
                <MenuItem 
                  primaryText="Dashboard" 
                  containerElement={<Link to="/dashboard"/>}
                  leftIcon={<ContentLink/>}/>
                <MenuItem 
                  primaryText="Login" 
                  containerElement={<Link to="/login"/>}
                  leftIcon={<PersonAdd/>}/>
                <MenuItem 
                  primaryText="About" 
                  containerElement={<Link to="/about"/>}
                  leftIcon={<Delete/>}/>
              </Menu>
            </div>
        </Drawer>
      </div>
    );
  }
}
