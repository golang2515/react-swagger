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

  renderResponseModel(detail,data){
    //console.log(req)
    return (<div>
      <Inspector data={detail}/>
    </div>);
  }

  render() {
    let {detail,data}=this.props;
    return (
      <Paper style={{ padding: 25 }}>
        <div>
          {this.renderResponseModel(detail,data) }
        </div>
      </Paper>
    );
  }
}
