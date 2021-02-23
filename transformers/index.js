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

module.exports = {
    getDate,
    getDateMonthFirst, 
    getProcessEnvWithKey
};