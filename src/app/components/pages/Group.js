import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardApi from '../api/CardApi';

const styles = {
  homeContent: {
    display: 'inline',
    width: '100%',
  },
  apiGroup: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    padding: 15,
  },
};

export default class Group extends React.Component {

  renderApi(apiListMap) {
    return (apiListMap.map(function (api) {
      return (
        <CardApi
          apiName={api.apiName}
          key={api.apiName}
          api={api}/>)
    }));
  }

  render() {
    const data = this.props.data;
    const apiList = this.props.apiList;
    const apiAll = this.props.apiAll;

    return (
      <div
        style={styles.homeContent}>
        <div
          style={styles.apiGroup}>
          {this.renderApi(apiList) }
        </div>
      </div>
    );
  }
}
