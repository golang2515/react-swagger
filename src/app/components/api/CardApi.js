import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import _ from 'underscore';

const styles={
	card:{

	}
};

class CardApi extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFunc(api){
    return (api.apiDetail.map(function(func){
      let keys = _.keys(func.detail);
      if(keys.length==1){
        return (
          <ListItem key={func.apiUrl}
            primaryText={func.apiUrl}
            style={{overflow: 'hidden', textOverflow: 'ellipsis',border: '1px solid red',padding:2,margin:0}}
            innerDivStyle={{overflow: 'hidden', textOverflow: 'ellipsis'}}
            leftIcon={<ActionGrade color={pinkA200} />}/>
        )
      }
    }));
  }

  render() {
  	let apiName=this.props.apiName;
  	let api=this.props.api;
    return (
      <Paper  
        zDepth={2}
        style={{width:'400px',marginTop:10}}>
        <Card>
          <CardHeader
            title={apiName}
            titleStyle={{paddingTop:7}}
            avatar="img/swagger-logo.png"
            style={{border: '1px solid transparent'}}
            actAsExpander={true}
      		  showExpandableButton={true}
          />
          <CardText expandable={true} style={{border: '1px solid blue',padding:2,margin:0}}>
            <List style={{border: '1px solid green',padding:0,margin:0}}>
              {this.renderFunc(api)}
            </List>
          </CardText>
        </Card>
      </Paper>
    );
  }
}

export default CardApi 