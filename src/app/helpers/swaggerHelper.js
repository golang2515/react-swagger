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
			            return [{apiUrl:key,apiName:key.split("/")[2],value:jsonList[key]}];
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
