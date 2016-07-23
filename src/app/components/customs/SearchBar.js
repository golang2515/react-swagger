import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={{width:270,height:30,display: 'inline-block'}}
      	zDepth={1}
      	rounded={true}>
      	<TextField 
      		style={{height:30}}
      		hintText=""
      		underlineShow={false}
      		fullWidth={false}/>
      </Paper>
    );
  }
}
