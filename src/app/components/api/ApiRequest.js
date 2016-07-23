import React from 'react';
import uuid from 'node-uuid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Inspector from 'react-json-inspector';
import JSONViewer from 'react-json-viewer';

export default class ApiRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRequestModel(req){
    //console.log(req)
    return (<div>
      <Inspector data={req}/>
    </div>);
  }

  render() {
    return (
      <Paper style={{ padding: 25 }}>
        <div>
          {this.renderRequestModel(this.props.requestModel) }
        </div>
        <div>
          <JSONViewer json={this.props.requestModel}></JSONViewer>
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
