import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={{width:250,display: 'inline-block'}}
      	zDepth={1}
      	rounded={true}>
      	<TextField 
      		hintText="Search"
      		underlineShow={false}
      		fullWidth={true}/>
      </Paper>
    );
  }
}
