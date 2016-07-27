import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Debug from '../../components/pages/Debug';
import HeaderInfo from '../../components/base/HeaderInfo';

import * as JsonActions from '../../actions/actions_json';
import * as LayoutActions from '../../actions/actions_layout';

import swaggerHelper from '../../utils/swaggerHelper';

import {Config} from '../../config/constant';

const styles={
  paperContent:{
    paddingTop:10,
    backgroundColor:'#eaeaea',
    minHeight:'calc(100vh - 115px)',
  }
}

class DebugPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
      const url=Config.SWAGGER_JSON_API;
      this.props.actions.jsonAction.fetchJsonData(url);
  }

  render() {
      if(!this.props.jsonSwagger)
        return (<div>Loading</div>);

      let data=this.props.jsonSwagger.data;
      let apiList=[];
      if(this.props.jsonSwagger.data){
        let paths=this.props.jsonSwagger.data.paths;
        apiList=swaggerHelper.generateApiList(paths);
      }else{
        return (<div>Loading</div>);
      }

      return (
        <Paper style={styles.paperContent}>
            <HeaderInfo data={data} jsonUrl={Config.SWAGGER_JSON_API}/>
            <Debug data={data} apiList={apiList}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DebugPage);