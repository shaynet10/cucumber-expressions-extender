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


module.exports = {
    getArray,
    getBoolean,
    getDate,
    getDateMonthFirst, 
    getProcessEnvWithKey
};