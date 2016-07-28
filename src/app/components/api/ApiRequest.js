import React from 'react';
import uuid from 'node-uuid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Inspector from 'react-json-inspector';
import JSONViewer from 'react-json-viewer';
import swaggerHelper from '../../utils/swaggerHelper';
import _ from 'underscore';

export default class ApiRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPremitiveRequest(req){
    return (req.request.params.map(function (param) {
      return (
        <div key={uuid.v4()}>
          <TextField
            key={param.name}
            hintText={param.name}
            floatingLabelText={`${param.name} (${param.type})`}
          />
        </div>
      )
    }));
  }

  renderObjectRequest_Backup(req){
    //TODO: Refactor
    if(!req.request.models>0)
      return "{\n}";

    var json="{\n";
    for(let i=0;i<req.request.models[0].length;i++){
      if(i==req.request.models[0].length-1)
        json=json+"\t\""+req.request.models[0][i].name+"\":"+"\"\""+"\n";
      else
        json=json+"\t\""+req.request.models[0][i].name+"\":"+"\"\","+"\n";
    }
    json=json+"}\n"
    return json;
  }
  renderObjectRequest(req){
      if(!req.request.models)
        return "{}";
      if(req.request.models.length>0)
        return JSON.stringify(req.request.models[0]);
      else
        return "{}";
  }

  renderRequestModel_Backup(req){
    //console.log(req)
    if(!req.hasParam){
      return (<h2>No Parameters</h2>);
    }
    if(req.isObject){
      return (<div>
        <pre>
          <textarea rows="10" style={{width:'100%'}} defaultValue={this.renderObjectRequest(req)}>
          </textarea>
        </pre>
      </div>);
    }
    else{
      return (<div>
        {this.renderPremitiveRequest(req)}
      </div>);
    }
  }

  renderRequestModel(detail,data){
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
          {this.renderRequestModel(detail,data) }
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
