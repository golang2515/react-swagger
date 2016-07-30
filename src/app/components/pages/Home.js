import React from 'react';
import CardApiFull from '../api/CardApiFull';
import RaisedButton from 'material-ui/RaisedButton'
import {deepOrange500} from 'material-ui/styles/colors'
import Message from 'material-ui/svg-icons/communication/message'
import ReactMaterialUiNotifications from 'react-materialui-notifications'
import moment from 'moment'
//import poser from 'swagger-poser';
/*import Highlight  from 'react-highlight';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/styles';*/

const styles = {
  homeContent: {
    display: 'inline',
    width: '100%',
  },
  apiAll: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
};

class Home extends React.Component {
  state = {
    Notifications: [],
    count: 0
  }

  constructor(props) {
    super(props);
  }

  showNotification = () => {
    let tempNotifications = this.state.Notifications
    tempNotifications.push(
      {
        title: 'Title',
        additionalText: `Some message to be displayed ${this.state.count}`,
        icon: <Message />,
        iconBadgeColor: deepOrange500,
        autoHide:5000,
        overflowText: "joe@gmail.com",
        timestamp: moment().format('h:mm A')
      }
    )
    this.setState({
      Notifications: tempNotifications,
      count: ++this.state.count
    })
  }

  renderApiFull(apiListMap,data) {
    //console.log(apiListMap);
    return (apiListMap.map(function (api) {
      return (
        <CardApiFull
          apiName={api.apiName}
          key={api.apiName}
          data={data}
          api={api}/>)
    }));
  }

  render() {
    const data = this.props.data;
    const apiAll = this.props.apiAll;
    //let sampleJson='';
    //if(apiAll.length>0){
        //let generator = poser.from(data);
        //let sample = generator.generate('UserModel');
        //sampleJson =JSON.stringify(sample, null, 2);
    //}
    return (
      <div
        style={styles.homeContent}>
        <RaisedButton
          style={{display:'none'}}
              label="Show Notification"
              onTouchTap={this.showNotification}
            />
        <div
          style={styles.apiAll}>
          {this.renderApiFull(apiAll,data) }
        </div>
        <ReactMaterialUiNotifications
            desktop={true}
            children={this.state.Notifications}
          />
      </div>
    );
  }
}
export default Home;


/*
          <div>
            <Highlight className='json'>
              {sampleJson}
            </Highlight>
          </div>*/