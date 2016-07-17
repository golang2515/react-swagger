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

			let results1=_.groupBy(results,function(value){
				return value[0].apiName;
			});
			console.log(results1);
			return results1;
			//console.log(results1);
        } catch (e) {
            console.log(e);
            return jsonList;
        }

        return results;
    }
}
