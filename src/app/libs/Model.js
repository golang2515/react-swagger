export class Model {
    constructor(key, type, required) {
        this.key = key;
        this.type = type;
        this.required = required;
    }
    toJson() {
        //console.log(this.key,this.type);
        /*        if(Array.isArray(this.type)){
                    var jsonOut="";
                    for(let i=0;i<this.type.length;i++){
                        jsonOut+= this.type[i].toJson();
                    }
                    return this.key+':'+addJsonCode(jsonOut);
                    //return addDubleCode(this.key) + ':' + getSampleValue(this.type);
                }
                else{*/
        return addDubleCode(this.key) + ':' + getSampleValue(this.type);
        //}
    }
}

export class ModelHelper {
    constructor(items) {
        this.items = items;
    }
    toString() {
        var jsonMaps = this.items.map(function(el, i) {
            if (i == 0)
                return '\t' + el.toJson();
            else
                return '\n\t' + el.toJson();
        });
        return addJsonCode(jsonMaps.toString());
    }
}

export function getSampleValue(type) {
    var result;
    switch (type) {
        case 'long':
        case 'integer':
            result = 0;
            break;
        case 'boolean':
            result = false;
            break;
        case 'double':
        case 'number':
            result = 0.0;
            break;
        case 'string':
            result = addDubleCode('string');
            break;
        case 'date':
            result = addDubleCode((new Date()).toISOString().split('T')[0]);
            break;
        case 'date-time':
            result = addDubleCode((new Date()).toISOString());
            break;
    }
    return result;
}

export function addDubleCode(input) {
    return `"${input}"`;
}

export function addJsonCode(input) {
    return `{\n${input}\n}`;
}
export function addJsonArrayCode(input) {
    return `[\n${input}\n]`;
}
