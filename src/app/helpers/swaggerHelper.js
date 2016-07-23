import _ from 'underscore';
import _lodash from 'lodash';

export default class swaggerHelper {

    static generateApiList(paths, definitions) {
        let results = [];
        if (paths == undefined)
            return results;

        try {
            let keys = _.keys(paths);
            let values = _.map(keys, function(k) {
                return {
                    apiUrl: k,
                    detail: paths[k],
                    request: generateModel(apiUrl, paths[k], definitions, true),
                    response: generateModel(apiUrl, paths[k], definitions, false),
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
                return {
                    apiName: k,
                    apiDetail: resultsGroups[k]
                };
            });
            return value2s;
        } catch (e) {
            console.log(e);
            return paths;
        }

        return results;
    }
    static generateApiAll(paths, definitions) {
        let results = [];
        console.log(paths);
        if (paths == undefined)
            return results;

        try {
            let keys = _.keys(paths);
            let values = _.map(keys, function(endpoint) {
                return {
                    apiName: endpoint,
                    apiDetail: paths[endpoint],
                    request: generateModel(endpoint, paths[endpoint], definitions, true),
                    response: generateModel(endpoint, paths[endpoint], definitions, false),
                };
            });
            return values;
        } catch (e) {
            console.log(e);
            return paths;
        }
        return results;
    }
}


export function generateModel(endpoint, detail, definitions, isRequest) {
    const keys = _.keys(detail);
    // TODO: First Get only array 0
    const verb = keys[0];
    const funcApi = detail[verb];
    if (isRequest)
        return generateRequestModel(endpoint, detail, definitions, funcApi);
    else
        return generateResponseModel(endpoint, detail, definitions, funcApi);
}

export function generateRequestModel(endpoint, detail, definitions, funcApi) {
    let result = {
        hasParam: false,
        isObject: false,
        request: {
            params: [],
            model: {},
        },
    };
    if (funcApi.parameters === null || funcApi.parameters === undefined) {
        return result;
    }
    funcApi.parameters.map((param) => {
        result.hasParam = true;
        if (!param.schema) {
            result.request.params.push({
                name: param.name,
                type: param.type,
                description: param.description
            });
        } else {
            result.isObject = true;
            var ref = param.schema.$ref;
            console.log(ref);
            var obj = getModel(ref, definitions);
            result.request.model = obj;
        }
    });
    console.log(result);
    return result;
}

export function getModel(refName, definitions) {
    if(refName==undefined) return {};
    const modelKeys = refName.split('/');
    const key = modelKeys[modelKeys.length - 1];
    if (key === "Object")
        return {};
    let obj = definitions[key];
    let keys = _.keys(obj.properties);
    let objOut = _.map(keys, function(propKey) {
        return {
            name: propKey,
            type: obj.properties[propKey].type,
            format: (obj.properties[propKey].format == undefined) ? "" : obj.properties[propKey].format,
        };
    });
    return objOut;
}


export function generateResponseModel(endpoint, detail, definitions, funcApi) {

}
