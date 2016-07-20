import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Group from '../../components/pages/Group';
import * as JsonActions from '../../actions/actions_json';
import * as LayoutActions from '../../actions/actions_layout';
import swaggerHelper from '../../helpers/swaggerHelper';

const styles={
  paperContent:{
    paddingTop:10,
    backgroundColor:'#eaeaea',
    minHeight:'calc(100vh - 85px)',
  }
}

class GroupPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
      //const url="api/swagger.json";
      const url="http://api2.navigosamui.com/swagger/docs/v1";
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
          <Group data={data} apiList={apiList} apiAll={apiAll}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage);