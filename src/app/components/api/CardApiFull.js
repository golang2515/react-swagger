import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import {ContentType} from '../../helpers/constant';
import _ from 'underscore';

import ApiRequest from './ApiRequest';
import ApiResponse from './ApiResponse';

const styles={
	card:{

	},
  raisedButton:{
    margin: 0,
    height:25,
    width:30,
  }
};

class CardApiFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contentType:''};
    this.handleContentChange=this.handleContentChange.bind(this);
  }

  handleContentChange(event,index,value){
    this.setState({contentType:value});
  }

  renderContentType(contenTypes){
    return (contenTypes.map(function(type){
      return (
        <MenuItem 
          value={type} 
          key={type} 
          primaryText={type}/>)
    }));
  }

  render() {
  	let apiName=this.props.apiName;
  	let api=this.props.api;
    let keys = _.keys(api.apiDetail);
    let verb=keys[0].toUpperCase();
    let isPrimary=false;
    if(verb==ContentType.POST)
      isPrimary=true;

    let summary=api.apiDetail[keys[0]].summary;
    let contenTypes=api.apiDetail[keys[0]].produces;
    let detail=api.apiDetail[keys[0]];
    //console.log(api);
    return (
      <Card style={{marginTop:10}}>
          <CardHeader
            subtitle={summary}
            title={apiName}
            avatar={(verb==ContentType.GET) ?"img/verb-get-icon.png":"img/verb-post-icon.png"}
            actAsExpander={true}
      		  showExpandableButton={true}
          />
          <CardText expandable={true} style={{padding:2,margin:0}}>
              <Tabs>
                <Tab label="Info">
              		<div style={{padding:5}}>
                    Response type
                    <DropDownMenu
                      onChange={this.handleContentChange}
                      value={this.state.contentType}
                      openImmediately={false}>
                        {this.renderContentType(contenTypes)}
                    </DropDownMenu>
                  </div>
                </Tab>
                <Tab label="Parameters">
                  <div style={{padding:5}}>
                    <ApiRequest 
                      detail={detail} 
                      requestModel={api.requestModel}/>
                  </div>
                </Tab>
                <Tab label="Response">
                  <div style={{padding:5}}>
                    <ApiResponse 
                      detail={detail} 
                      responseModel={api.responseModel}/>
                  </div>
                </Tab>
                <Tab label="Scripts">
                  <Paper>
                  </Paper>
                </Tab>
              </Tabs>
          </CardText>
        </Card>
    );
  }
}

export default CardApiFull 



/*border: '1px solid blue',*/