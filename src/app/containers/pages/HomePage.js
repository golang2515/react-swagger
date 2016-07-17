import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/pages/Home';
import * as JsonActions from '../../actions/actions_json';
import swaggerHelper from '../../helpers/swaggerHelper';

const styles={
  content:{
    paddingTop:5,
    backgroundColor:'#eaeaea',
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
      this.props.actions.fetchJsonData(url);
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
      <div style={styles.content}>
        <Home data={data} apiList={apiList}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    jsonSwagger: state.jsonSwagger
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(JsonActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
