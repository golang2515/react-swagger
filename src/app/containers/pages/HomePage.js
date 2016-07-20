import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Home from '../../components/pages/Home';

import * as JsonActions from '../../actions/actions_json';
import * as LayoutActions from '../../actions/actions_layout';

import swaggerHelper from '../../helpers/swaggerHelper';

const styles={
  paperContent:{
    paddingTop:10,
    backgroundColor:'#eaeaea',
    minHeight:'calc(100vh - 115px)',
  }
}

class HomePage extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    apiList: React.PropTypes.array,
  };
  constructor(props) {
    super(props);
  }

  componentWillMount(){
      const url="api/swagger.json";
      this.props.actions.jsonAction.fetchJsonData(url);
  }

  render() {
    if(!this.props.jsonSwagger)
      return (<div>Loading</div>);

    let data=this.props.jsonSwagger.data;
    let apiList=[];
    let apiAll=[];
    if(this.props.jsonSwagger.data){
      let paths=this.props.jsonSwagger.data.paths;
      apiList=swaggerHelper.generateApiList(paths);
      apiAll=swaggerHelper.generateApiAll(paths);
    }else{
      return (<div>Loading</div>);
    }

    return (
      <Paper style={styles.paperContent}>
          <Home data={data} apiList={apiList} apiAll={apiAll}/>
      </Paper>
    );
  }
}
function mapStateToProps(state) {
  return {
    jsonSwagger: state.jsonSwagger,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:{
        jsonAction:bindActionCreators(JsonActions, dispatch),
        layoutAction:bindActionCreators(LayoutActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
