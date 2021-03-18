const { getDateObject } = require('./helpers/date');

const getDate = (val) => {
    const arr = val.split(/[^\d+]/);
    return getDateObject(arr[0], arr[1], arr[2]);
}

const getDateMonthFirst = (val) => {
    const arr = val.split(/[^\d+]/);
    return getDateObject(arr[1], arr[0], arr[2]);
}

const getProcessEnvWithKey = (param) => {
    const key = param.replace(/^ENV\[\'([^']+)\'\]$/, '$1')
                    .replace(/^ENV\[\"([^"]+)\"\]$/, '$1');
    const val = process.env[key] || '';
    return [val, key];
}

const getBoolean = (value) => {
    return value.toLowerCase().trim() === 'true';
}

const getArray = (param, type) => {
    const arr = param.split(/\s*,\s*/);
    if (type === 'int') return arr.map((val) => parseInt(val, 10));
    if (type === 'base2') return arr.map((val) => parseInt(val, 2));
    if (type === 'base8') return arr.map((val) => parseInt(val, 8));
    if (type === 'base16') return arr.map((val) => parseInt(val, 16));
    if (type === 'float') return arr.map((val) => parseFloat(val));
    if (type === 'boolean') return arr.map((val) => getBoolean(val));
    return arr;
}

const getJson = (param) => {
    console.log(`in getJSON "${param}"`);
    let data = '';
    try {
        data = JSON.parse(param);
    } catch(e) {
        throw new Error(`cannot convert to JSON, 
        ensure your JSON object is valid. 
        Ensure keys are in "KEY"
        Ensure that string values in "VALUE"
        Some common mistakes in JSON values:
        {a:1, b:2} isn't valid
        {"a":1, "b":2} is valid
        {'a': 'b'} isn't valid
        {"a": 'b'} isn't valid
        {"a": "b"} is valid
        YOUR DATA: ${param}
        ERROR DATA: ${e.message}`);
    }
    return data;
}

module.exports = {
    getArray,
    getBoolean,
    getDate,
    getDateMonthFirst, 
    getProcessEnvWithKey,
    getJson
};