import React from 'react';
import CardApiFull from '../api/CardApiFull';

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

  constructor(props) {
    super(props);
  }

  renderApiFull(apiListMap) {
    //console.log(apiListMap);
    return (apiListMap.map(function (api) {
      return (
        <CardApiFull
          apiName={api.apiName}
          key={api.apiName}
          api={api}/>)
    }));
  }

  render() {
    const data = this.props.data;
    const apiAll = this.props.apiAll;
    return (
      <div
        style={styles.homeContent}>
        <div
          style={styles.apiAll}>
          {this.renderApiFull(apiAll) }
        </div>
      </div>
    );
  }
}
export default Home;