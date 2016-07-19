import React from 'react';
import Paper from 'material-ui/Paper';
import Form from 'react-jsonschema';
import RaisedButton from 'material-ui/RaisedButton';

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

  	/*if(detail.parameters==null)*/
  		return {
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
  		};

  	/*return (detail.parameters.map(function(param){
  		console.log(param);
  		if(!param.schema){
	      	return (
	      		<div key={param.name} style={{display:'flex',flexFlow:'row wrap',justifyContent:'flex-start'}}>
		        	<div key={param.name}>{param.name}</div>
		        	<div key={param.type}>{param.type}</div>
	        	</div>
	        )
	    }else{
	    	return (
	        	<li key={param.name}>
	        		{param.name} Object
	        	</li>
	        )
	    }
    }));*/
  }
  render() {
  	//let jsonData=this.formatParam(this.props.detail);
    return (
      <Paper style={{padding:25}}>
		<Form
		      schema={schema}
		      formData={formData}
		      onError={errors => {
		        console.log(errors);
		      }}
		      onSubmit={data => {
		        console.log(data);
		      }}
		    />
		<RaisedButton label="Try it out!" primary={true} style={{margin: 12}} />
      </Paper>
    );
  }
}
