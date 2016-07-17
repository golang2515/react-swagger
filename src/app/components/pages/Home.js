import React from 'react';
import Inspector from 'react-json-inspector';
import JSONTree from 'react-json-tree';

const styles={
  homeContent:{
    display:'flex',
    paddingTop:15,
  }
};

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data=this.props.data;
    const apiList=this.props.apiList;
    return (
      <div style={styles.homeContent}>
        <Inspector data={data}/>
        <Inspector data={apiList}/>
      </div>
    );
  }
}
export default Home;