import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Home from '../../components/pages/Home';
import HeaderInfo from '../../components/base/HeaderInfo';

import * as JsonActions from '../../actions/actions_json';
import * as LayoutActions from '../../actions/actions_layout';

import {Model,addJsonCode} from '../../libs/Model';

import swaggerHelper from '../../utils/swaggerHelper';
import {Config} from '../../config/constant';

const styles={
  paperContent:{
    paddingTop:2,
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
      console.log("componentWillMount HomePage");
      const url=Config.SWAGGER_JSON_API;
      this.props.actions.jsonAction.fetchJsonData(url);
  }

  render() {

    let models=[
      new Model("Id","integer", true),
      new Model("UserName","string", false),
      new Model("Password","string", false),
      new Model("CreatedDate","date", false),
      new Model("LastLoginDate","date-time", false),
    ];
    var modelMaps = models.map(function(el,i) {
      if(i==0)
        return '\t'+el.toJson();
      else
        return '\n\t'+el.toJson();
    });
    console.log(addJsonCode(modelMaps.toString()));


    if(!this.props.jsonSwagger)
      return (<div>Loading</div>);

    let data=this.props.jsonSwagger.data;
    let apiAll=[];
    if(this.props.jsonSwagger.data){
      let paths=this.props.jsonSwagger.data.paths;
      let definitions=this.props.jsonSwagger.data.definitions;
      apiAll=swaggerHelper.generateApiAll(paths,definitions);
    }else{
      return (<div>Loading</div>);
    }

    //console.log(this.props.jsonSwagger.data);

    return (
      <Paper style={styles.paperContent}>
          <HeaderInfo data={data} jsonUrl={Config.SWAGGER_JSON_API}/>
          <Home data={data} apiAll={apiAll}/>
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
