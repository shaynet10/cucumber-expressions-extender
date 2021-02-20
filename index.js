const { defineParameterType } = require('@cucumber/cucumber')

const getFullYear = (year) => {
    const _year = Number(year);
    if (_year.toString().length === 4) return _year;
    if (_year >= 70) return 1900 + _year;
    return 2000 + _year;
}

const getDateObject = (day, month, year) => {
    const date = new Date();
    date.setDate(day);
    date.setMonth(Number(month) - 1);
    date.setYear(getFullYear(year));
    return date;
}

const getDate = (val) => {
    const arr = val.split(/[^\d+]/);
    return getDateObject(arr[0], arr[1], arr[2]);
}

const getDateMonthFirst = (val) => {
    const arr = val.split(/[^\d+]/);
    return getDateObject(arr[1], arr[0], arr[2]);
}

defineParameterType({ 
    name: 'dd-mm-yy',
    regexp: /\d\d[^\d]\d\d[^\d]\d\d/,
    transformer: s => getDate(s)
});

defineParameterType({ 
    name: 'mm-dd-yy',
    regexp: /\d\d[^\d]\d\d[^\d]\d\d/,
    transformer: s => getDateMonthFirst(s)
});

defineParameterType({ 
    name: 'dd-mm-yyyy',
    regexp: /\d\d[^\d]\d\d[^\d]\d\d\d\d/,
    transformer: s => getDate(s)
});

defineParameterType({ 
    name: 'mm-dd-yyyy',
    regexp: /\d\d[^\d]\d\d[^\d]\d\d\d\d/,
    transformer: s => getDateMonthFirst(s)
});


// defineParameterType({ 
//     name: 'env',
//     regexp: /ENV\['[^']+'\]|ENV\["[^"]+"\]/,
//     transformer: s => process.env[s]
// });

// defineParameterType({ 
//     name: 'json',
//     regexp: /\{.*\}/,
//     transformer: s => JSON.parse(s)
// });

// defineParameterType({ 
//     name: 'float-array',
//     regexp: /([^,]+,)+[^,]+/,
//     transformer: s => s.split(',').map((val) => Number(val))
// });

// defineParameterType({ 
//     name: 'int-array',
//     regexp: /([^,]+,)+[^,]+/,
//     transformer: s => s.split(',').map((val) => Number(val))
// });

// defineParameterType({ 
//     name: 'string-array',
//     regexp: /([^,]+,)+[^,]+/,
//     transformer: s => s.split(',')
// });


// defineParameterType({ 
//     name: 'space',
//     regexp: /\s+/,
//     transformer: s => s
// });

// defineParameterType({ 
//     name: 'non-space',
//     regexp: /[^\s]+/,
//     transformer: s => String(s)
// });

// defineParameterType({ 
//     name: 'bool',
//     regexp: /true|false/i,
//     transformer: s => Boolean(s.toLowerCase())
// });

// defineParameterType({ 
//     name: 'bool',
//     regexp: /true|false/i,
//     transformer: s => Boolean(s.toLowerCase())
// });
