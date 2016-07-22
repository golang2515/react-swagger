import _ from 'underscore';
import _lodash from 'lodash';

export default class swaggerHelper {
    static generateApiModel(api) {
        console.log(api);
        try {
            var datas=_lodash.each(api.paths, function(endpoints, path) {
                _lodash.each(endpoints, function(endpoint, method) {
                    //console.log(method + " " + path);

                    endpoint.method = method;
                    endpoint.path = path;

                    _lodash.each(endpoint.tags, function(tag) {

                        var tagDetails = _lodash.find(api.tags, function(t) {
                            return t.name == tag;
                        });

                        if (!tagDetails.endpoints)
                            tagDetails.endpoints = [];

                        tagDetails.endpoints.push(endpoint);
                    });

                }, this);
            }, this)

            console.log(datas);
        } catch (e) {
            console.log(e);
            return api;
        }
    }
    static generateApiList(jsonList) {
        let results = [];
        if (jsonList == undefined)
            return results;

        try {
            let keys = _.keys(jsonList);
            let values = _.map(keys, function(k) {
                return {
                    apiUrl: k,
                    detail: jsonList[k]
                };
            });
            let resultsGroups = _.groupBy(values, function(value) {
                let index = 2;
                if (value.apiUrl.indexOf('api') < 0)
                    index = 1;
                let keyGroup = value.apiUrl.split("/")[index];
                let keyGroups = keyGroup.split(":");
                return keyGroups[0];
            });


            let key2s = _.keys(resultsGroups);
            let value2s = _.map(key2s, function(k) {
                //console.log(k);
                return { apiName: k, apiDetail: resultsGroups[k] };
            });
            return value2s;
        } catch (e) {
            console.log(e);
            return jsonList;
        }

        return results;
    }

    static generateApiAll(jsonList) {
        let results = [];
        if (jsonList == undefined)
            return results;

        try {
            let keys = _.keys(jsonList);
            let values = _.map(keys, function(k) {
                return {
                    apiName: k,
                    apiDetail: jsonList[k]
                };
            });
            return values;
        } catch (e) {
            console.log(e);
            return jsonList;
        }
        return results;
    }
}
