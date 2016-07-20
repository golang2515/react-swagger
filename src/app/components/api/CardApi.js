import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
            style={{textoverflow:'ellipsis'}}
            leftIcon={<ActionGrade color={pinkA200} />}/>
        )
      }
    }));
  }

  render() {
  	let apiName=this.props.apiName;
  	let api=this.props.api;
    return (
      <Card style={{width:'400px',marginTop:10}}>
          <CardHeader
            title={apiName}
            titleStyle={{paddingTop:7}}
            avatar="img/swagger-logo.png"
            actAsExpander={true}
      		  showExpandableButton={true}
          />
          <CardText expandable={true}>
            <List>
              {this.renderFunc(api)}
            </List>
          </CardText>
        </Card>
    );
  }
}

export default CardApi 