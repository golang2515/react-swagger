import React from 'react';
import uuid from 'node-uuid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Inspector from 'react-json-inspector';
import JSONViewer from 'react-json-viewer';

export default class ApiParam extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResponseModel(res){
    //console.log(req)
    return (<div>
      <Inspector data={res}/>
    </div>);
  }

  render() {
    return (
      <Paper style={{ padding: 25 }}>
        <div>
          {this.renderResponseModel(this.props.responseModel) }
        </div>
        <div>
          <JSONViewer json={this.props.responseModel}></JSONViewer>
        </div>
      </Paper>
    );
  }
}
