import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles={
	card:{

	}
};

class CardApi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let apiName=this.props.apiName;
  	//let title="this.props.title";
    return (
      <Card style={{width:'400px',marginTop:10}}>
          <CardHeader
            title={apiName}
            avatar="http://lorempixel.com/100/100/nature/"
            actAsExpander={true}
      		showExpandableButton={true}
          />
          <CardText expandable={true}>
          </CardText>
          <CardActions expandable={true}>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
    );
  }
}

export default CardApi 