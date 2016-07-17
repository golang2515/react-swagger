import React from 'react';
import Inspector from 'react-json-inspector';
import JSONTree from 'react-json-tree';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardApi from '../api/CardApi';

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
  },
  jsonTab:{
    display:'flex',
    padding:15,
  },
  apiTab:{
    display:'flex',
    flexFlow: 'row wrap',
    justifyContent:'space-around',
    padding:15,
  },
  infoTab:{
    
  },
  resultTab:{
    
  }
};

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  renderApi(apiListMap){
    console.log(apiListMap);
    return (apiListMap.map(function(api){
      return (<CardApi apiName={api.apiName} key={api.apiName} api={api}/>)
    }));
  }

  render() {
    const data=this.props.data;
    const apiList=this.props.apiList;
    const apiAll=this.props.apiAll;

    return (
      <div 
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
                    style={styles.apiTab}>
                      {this.renderApi(apiAll)}
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
              <Tab 
                label="Info"  
                  style={styles.mainTab}>
                    <div 
                      style={styles.infoTab}>
                    </div>
              </Tab>
              <Tab 
                label="Result"  
                style={styles.mainTab}>
                  <div 
                    style={styles.resultTab}>
                  </div>
              </Tab>
          </Tabs>
      </div>
    );
  }
}
export default Home;