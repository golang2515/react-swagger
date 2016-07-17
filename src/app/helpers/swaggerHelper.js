import _ from 'underscore';

export default class swaggerHelper {
    static generateApiList(jsonList) {
        let results = [];
        if (jsonList == undefined)
            return results;

        try {
            results = _.chain(jsonList)
			        .keys()
			        .map(function(key) {
			        	let index=2;
			        	if(key.indexOf('api')<0)
			        		index=1;
			        	let keyGroup=key.split("/")[index];
			        	let keyGroups=keyGroup.split(":");
			            return [{apiUrl:key,apiName:keyGroups[0],value:jsonList[key]}];
			        })
			        .value();
			//console.log(results);


			let keys = _.keys(jsonList);
			let values = _.map(keys, function(k) { 
				return {
							apiUrl:k,
							detail:jsonList[k]}; 
					}
			);
			//var valueSlices = _.zip.apply(_, values);
			//var maps=_.map(valueSlices, _.partial(_.object, keys));
			//console.log(values);

			let resultsGroups=_.groupBy(values,function(value){
				let index=2;
	        	if(value.apiUrl.indexOf('api')<0)
	        		index=1;
	        	let keyGroup=value.apiUrl.split("/")[index];
	        	let keyGroups=keyGroup.split(":");
				return keyGroups[0];
			});


			let key2s = _.keys(resultsGroups);
  			let value2s = _.map(key2s, function(k) { 
  					console.log(k);
  					return {apiName:k,apiDetails:resultsGroups[k]}; 
  				}
  			);
			console.log(value2s);

			return value2s;
			//console.log(resultsGroups);
        } catch (e) {
            console.log(e);
            return jsonList;
        }

        return results;
    }
}
