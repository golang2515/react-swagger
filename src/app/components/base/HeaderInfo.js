import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';


const styles={
	mainContent:{
		display: 'flex',
	    flexDirection: 'row',
	    justifyContent: 'flex-start',
	    padding: 10,
	},
	paper:{
		margin: 10,
		width:280,
	}
}

export default class HeaderInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	let {host,info,swagger}=this.props.data;
  	if(info==null || info==undefined)
  		info={version:'',title:''}

    return (
    	<div style={styles.mainContent}> 
    		<Paper zDepth={2} style={styles.paper}>
      			<List>
      			 	<ListItem
				        leftAvatar={<Avatar icon={<FileFolder />} />}
				        primaryText="Host"
				        secondaryText={info.title}
			      	/>
      			</List>
      		</Paper>
      		<Paper zDepth={2} style={styles.paper}>
      			<List>
      			 	<ListItem
				        leftAvatar={<Avatar icon={<FileFolder />} />}
				        primaryText="Host"
				        secondaryText={host}
			      	/>
      			</List>
      		</Paper>
			<Paper zDepth={2} style={styles.paper}>
      			<List>
      			 	<ListItem
				        leftAvatar={<Avatar icon={<FileFolder />} />}
				        primaryText="API version"
				        secondaryText={info.version}
			      	/>
      			</List>
      		</Paper>
      		<Paper zDepth={2} style={styles.paper}>
      			<List>
      			 	<ListItem
				        leftAvatar={<Avatar icon={<FileFolder />} />}
				        primaryText="Swagger version"
				        secondaryText={swagger}
			      	/>
      			</List>
      		</Paper>
      		<Paper zDepth={2} style={styles.paper}>
      			<List>
      			 	<ListItem
				        leftAvatar={<Avatar icon={<FileFolder />} />}
				        primaryText="JSON"
				        secondaryText={this.props.jsonUrl}
			      	/>
      			</List>
      		</Paper>
      </div>
    );
  }
}
