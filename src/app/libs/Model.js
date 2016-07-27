export  class Model {
    constructor(key, type, required) {
        this.key = key;
        this.type = type;
        this.required = required;
    }
    toJson() {
        return addDubleCode(this.key) + ':' + getSampleValue(this.type);
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
