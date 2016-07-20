import React from 'react';
import Inspector from 'react-json-inspector';
import JSONTree from 'react-json-tree';
const styles={
  homeContent:{
    display:'inline',
    width:'100%',
  },
  jsonPanel:{
    display:'flex',
    padding:15,
    flexDirection:'row wrap',
    justifyContent:'space-around',
  }
};

export default class Debug extends React.Component {
  render() {
	const data=this.props.data;
    const apiAll=this.props.apiAll;
    const apiList=this.props.apiList;
    return (
      <div
      	style={styles.homeContent}>
      	<div 
        style={styles.jsonPanel}>
          <Inspector data={data}/>
          <Inspector data={apiList}/>
      </div>
      </div>
    );
  }
}
