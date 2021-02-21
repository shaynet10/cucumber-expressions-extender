const { defineParameterType } = require('@cucumber/cucumber')
const { getDate, getDateMonthFirst } = require('./transformers');

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

defineParameterType({ 
    name: 'non-space',
    regexp: /[^\s]+/,
    transformer: s => String(s)
});

defineParameterType({ 
    name: 'space',
    regexp: /\s+/,
    transformer: s => String(s)
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
//     name: 'bool',
//     regexp: /true|false/i,
//     transformer: s => Boolean(s.toLowerCase())
// });

// defineParameterType({ 
//     name: 'bool',
//     regexp: /true|false/i,
//     transformer: s => Boolean(s.toLowerCase())
// });
