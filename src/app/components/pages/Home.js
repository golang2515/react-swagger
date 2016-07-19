import React from 'react';
import Inspector from 'react-json-inspector';
import JSONTree from 'react-json-tree';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardApi from '../api/CardApi';
import CardApiFull from '../api/CardApiFull';

const styles={
  homeContent:{
    display:'inline',
    width:'100%',
  },
  tabs:{

  },
  mainTab:{
    backgroundColor:'#FFFFFF',
    color:'#000000',
    display:'inline',
  },
  jsonTab:{
    display:'flex',
    padding:15,
  },
  apiAllTab:{
    display:'flex',
    //flexFlow: 'row wrap',
    flexDirection:'column',
    justifyContent:'space-around',
    padding:10,
  },
  apiTab:{
    display:'flex',
    flexFlow: 'row wrap',
    justifyContent:'space-around',
    padding:15,
  },
};

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  renderApi(apiListMap){
    //console.log(apiListMap);
    return (apiListMap.map(function(api){
      return (
        <CardApi 
          apiName={api.apiName} 
          key={api.apiName} 
          api={api}/>)
    }));
  }

  renderApiFull(apiListMap){
    //console.log(apiListMap);
    return (apiListMap.map(function(api){
      return (
        <CardApiFull 
          apiName={api.apiName} 
          key={api.apiName} 
          api={api}/>)
    }));
  }

  render() {
    const data=this.props.data;
    //const apiList=this.props.apiList;
    const apiAll=this.props.apiAll;

    return (
      <div 
        style={styles.homeContent}>
          <div 
            style={styles.apiAllTab}>
              {this.renderApiFull(apiAll)}
          </div>
      </div>
    );
  }
}
export default Home;



/*{<div 
        style={styles.homeContent}>
          <Tabs 
            style={styles.tabs}>
              <Tab 
                label="debug Json" 
                style={styles.mainTab}>
                  <div 
                    style={styles.jsonTab}>
                      <Inspector data={data}/>
                      <Inspector data={apiList}/>
                  </div>
              </Tab>
              <Tab 
                label="All"  
                style={styles.mainTab}>
                  <div 
                    style={styles.apiAllTab}>
                      {this.renderApiFull(apiAll)}
                  </div>
              </Tab>
              <Tab 
                label="Api Group"  
                style={styles.mainTab}>
                  <div 
                    style={styles.apiTab}>
                      {this.renderApi(apiList)}
                  </div>
              </Tab>
          </Tabs>
      </div>}*/