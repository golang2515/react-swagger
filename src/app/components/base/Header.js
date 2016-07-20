import React from 'react';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
const styles={
  appBar:{
    paddingLeft:250,
  },
  titleStyle:{
    userSelect: 'none',
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowHide=this.handleShowHide.bind(this);
  }

  handleShowHide(e){
    let open=!this.props.layout.data.open;
    let layoutNew={
      open:open,
      paddingLeft:open==true?250:0
    };
    this.props.layoutAction.showHideNavBar(layoutNew);
  }

  render() {
    let layout=this.props.layout;
    return (
      <div style={{paddingLeft:layout.data.paddingLeft}}>
          <AppBar
            title={(this.props.layout.data.open==true)?"":"react-swagger"}
            zDepth={1}
            onLeftIconButtonTouchTap={this.handleShowHide}
            titleStyle={styles.titleStyle}
            iconElementRight={
              <div>
                <FlatButton label="Token"  style={{color:'#FFFFFF'}}/>
                <FlatButton label="Document"  style={{color:'#FFFFFF'}}/>
              </div>
            }
          />
      </div>
    );
  }
}
