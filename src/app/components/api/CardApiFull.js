import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles={
	card:{

	}
};

class CardApiFull extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let apiName=this.props.apiName;
  	//let title="this.props.title";
    return (
      <Card style={{marginTop:10}}>
          <CardHeader
            title={apiName}
            avatar="img/swagger-logo.png"
            actAsExpander={true}
            titleStyle={{paddingTop:7,fontSize:'12pt'}}
      		  showExpandableButton={true}
          />
          <CardText expandable={true}>
          	<div>
          		Model/Request/Response
          	</div>
          </CardText>
          <CardActions expandable={true}>
            <FlatButton label="Run" />
            <FlatButton label="Info" />
          </CardActions>
        </Card>
    );
  }
}

export default CardApiFull 