import React from 'react';
import Paper from 'material-ui/Paper';
import Form from 'react-jsonschema';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const schema = {
  "title": "Basic Demo",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First Name",
    },
    "lastName": {
      "type": "string",
      "title": "Last Name",
    },
    "age": {
      "type": "integer",
      "title": "Age",
      "description": "Age in years",
    },
  },
};

const formData = {
  firstName: '',
  lastName: '',
  age: '',
};

export default class ApiParam extends React.Component {
  constructor(props) {
    super(props);
  }

  formatParam(detail){

    if(detail.parameters==null)
      return (<div>No param</div>);

    //return (<div>Has param</div>);

  	/*if(detail.parameters==null)*/
/*  		return {
  			schema:{
  				"title": "Basic Demo",
  				"type": "object",
  				"properties": {
  					"firstName": {
				     "type": "string",
				     "title": "First Name",
				    },
				    "lastName": {
				     "type": "string",
				     "title": "Last Name",
				    },
  				},
  			},
  			formData:{
  				firstName:'',
  				lastName:'',
  			}
  		};*/

  	return (detail.parameters.map(function(param){
  		console.log(param);
  		if(!param.schema){
	      	return (
	      		<div key={+new Date} style={{display:'flex',flexFlow:'row wrap',justifyContent:'flex-start'}}>
              <div>
                <TextField
                    hintText={param.name}
                    floatingLabelText={param.name+'('+param.type+')'}
                    floatingLabelFixed={false}
                  />
	        	  </div>
            </div>
	        );
	    }else{
	    	return (
	        	<li key={+new Date}>
	        		{param.name} Object
	        	</li>
	        )
	    }
    }));
  }
  render() {
    console.log(this.props.detail)
    return (
      <Paper style={{padding:25}}>
          <div>
            {this.formatParam(this.props.detail)}
          </div>
		      <RaisedButton label="Try it out!" primary={true} style={{margin: 12}} />
      </Paper>
    );
  }
}
