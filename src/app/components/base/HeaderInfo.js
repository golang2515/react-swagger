import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ApplicationIcon from 'material-ui/svg-icons/action/home';
import HostIcon from 'material-ui/svg-icons/action/http';
import ApiIcon from 'material-ui/svg-icons/action/donut-large';
import SwaggerIcon from 'material-ui/svg-icons/action/donut-small';
import JsonIcon from 'material-ui/svg-icons/action/code';

const styles={
  mainContent:{
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
	paper:{
		  display: 'flex',
	    flexFlow: 'row wrap',
	    justifyContent: 'space-around',
	    padding: 0,
	}
}

export default class HeaderInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	let {host,info,swagger}=this.props.data;
  	if(!info)
  		info={version:'',title:''}

    return (
    	<div style={styles.mainContent}> 
    		<Paper zDepth={2}>
      			<List style={styles.paper}>
      			 	<ListItem
				        leftAvatar={<Avatar style={{backgroundColor:'#ff5722'}} icon={<ApplicationIcon />} />}
				        primaryText="Application"
				        secondaryText={info.title}
			      	/>
      			 	<ListItem
				        leftAvatar={<Avatar style={{backgroundColor:'#673ab7'}} icon={<HostIcon />} />}
				        primaryText="Host"
				        secondaryText={host}
			      	/>
      			 	<ListItem
				        leftAvatar={<Avatar style={{backgroundColor:'#4CAF50'}} icon={<ApiIcon />} />}
				        primaryText="API version"
				        secondaryText={info.version}
			      	/>
      			 	<ListItem
				        leftAvatar={<Avatar style={{backgroundColor:'#3F51B5'}} icon={<SwaggerIcon />} />}
				        primaryText="Swagger version"
				        secondaryText={swagger}
			      	/>
      			 	<ListItem
				        leftAvatar={<Avatar style={{backgroundColor:'#009688'}} icon={<JsonIcon />} />}
				        primaryText="JSON"
				        secondaryText={this.props.jsonUrl}
			      	/>
      			</List>
      		</Paper>
      </div>
    );
  }
}
