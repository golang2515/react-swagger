import React from 'react';
import uuid from 'node-uuid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ApiParam extends React.Component {
  constructor(props) {
    super(props);
  }

  formatParam(detail) {
    if (detail.parameters === null || detail.parameters === undefined) {
      return (<div>No param</div>);
    }

    //console.log(detail.parameters);

    return (detail.parameters.map((param) => {
      //console.log(param);
      if (!param.schema) {
	      	return (
            <div key={uuid.v4()} style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start' }}>
              <div>
                <TextField
                  hintText={param.name}
                  floatingLabelText={param.name + '(' + param.type + ')'}
                  floatingLabelFixed={false}
                  />
                </div>
            </div>
          );
      } else {
        return (
	        	<li key={uuid.v4() }>
            {param.name} Object {param.schema.$ref}
	        	</li>
        );
      }
    }));
  }
  render() {
    //console.log(this.props.detail);

    return (
      <Paper style={{ padding: 25 }}>
        <div>
          {this.formatParam(this.props.detail) }
        </div>
        <RaisedButton
          label='Try it out!'
          primary
          style={{ margin: 12 }}
          />
      </Paper>
    );
  }
}
