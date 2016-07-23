import _ from 'underscore';
export default class swaggerHelper {

    static generateApiList(paths, definitions) {
        let results = [];
        //console.log(paths);
        if (paths == undefined)
            return results;
        try {
            let keys = _.keys(paths);
            let values = _.map(keys, function(k) {
                return {
                    apiUrl: k,
                    detail: paths[k],
                    requestModel: generateModel(k, paths[k], definitions, true),
                    responseModel: generateModel(k, paths[k], definitions, false),
                };
            });
            //console.log(values)
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
        //console.log(results);
        return results;
    }
    static generateApiAll(paths, definitions) {
        let results = [];

        if (paths == undefined)
            return results;

        try {
            let keys = _.keys(paths);
            let values = _.map(keys, function(endpoint) {
                return {
                    apiName: endpoint,
                    apiDetail: paths[endpoint],
                    requestModel: generateModel(endpoint, paths[endpoint], definitions, true),
                    responseModel: generateModel(endpoint, paths[endpoint], definitions, false),
                };
            });
            return values;
        } catch (e) {
            console.log(e);
            return paths;
        }
        //console.log(results);
        return results;
    }
}


export function generateModel(endpoint, detail, definitions, isRequest) {
    const keys = _.keys(detail);
    // TODO: First Get only array 0
    const verb = keys[0];
    const funcApi = detail[verb];
    try {
        if (isRequest)
            return generateRequestModel(endpoint, detail, definitions, funcApi);
        else
            return generateResponseModel(endpoint, detail, definitions, funcApi);
    } catch (e) {
        console.log(e);
        return null;
    }
}

export function generateRequestModel(endpoint, detail, definitions, funcApi) {
    //console.log(detail);
    let result = {
        hasParam: false,
        isObject: false,
        request: {
            params: [],
            models: [],
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
            var ref = undefined;
            try {
                var ref = param.schema.$ref;
            } catch (e) {
                console.log(e);
                console.log(param);
            }

            //console.log(ref);
            var obj = getModel(ref, definitions);
            result.request.models.push(obj);
        }
    });
    //console.log(result);
    return result;
}

export function getModel(refName, definitions) {
    if (refName == undefined) return {};
    const modelKeys = refName.split('/');
    const key = modelKeys[modelKeys.length - 1];

    if (key === "Object")
        return {};
    let obj = definitions[key];
    let keys = _.keys(obj.properties);
    let objOut = _.map(keys, function(propKey) {
        //console.log(propKey,obj.properties[propKey]);
        if (obj.properties[propKey].type == "array") {
            let ref = undefined;
            try {
                ref = obj.properties[propKey].$ref;
            } catch (e) {
                console.log(e);
                ref = obj.properties[propKey].$ref;
            }
            return constructJson(propKey, getModel(ref, definitions));
        } else if (obj.properties[propKey].type == undefined) {
            //console.log(obj.properties[propKey]);
            let ref = undefined;
            try {
                ref = obj.properties[propKey].$ref;
            } catch (e) {
                console.log(e);
                ref = obj.properties[propKey].$ref;
            }
            return constructJson(propKey, getModel(ref, definitions));
        } else {
            return {
                name: propKey,
                type: obj.properties[propKey].type,
                format: (obj.properties[propKey].format == undefined) ? "" : obj.properties[propKey].format,
            };
        }
    });
    //console.log(objOut);
    return objOut;
}


export function generateResponseModel(endpoint, detail, definitions, funcApi) {
    let results = [];
    if (funcApi.responses === null || funcApi.responses === undefined) {
        return result;
    }
    let keys = _.keys(funcApi.responses);
    let objOut = _.map(keys, function(key) {

        try {
            if (funcApi.responses[key].schema['$ref'] == undefined)
                console.log("$REF NULL");
        } catch (e) {
            console.log(e);
            console.log(funcApi.responses[key].schema);
        }

        let response = {
            status: key,
            description: funcApi.responses[key].description,
            model: getModel(funcApi.responses[key].schema.$ref, definitions),
        }
        results.push(response);
    });
    return results;
}


export function constructJson(jsonKey, jsonValue) {
    var jsonObj = {};
    jsonObj[jsonKey] = jsonValue;
    return jsonObj;
}
