const { defineParameterType } = require('@cucumber/cucumber')
const { getArray, getJson, getBoolean, getDate, getDateMonthFirst, getProcessEnvWithKey } = require('./transformers');

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

defineParameterType({ 
    name: 'env',
    regexp: /ENV\['[^']+'\]|ENV\["[^"]+"\]/,
    transformer: s => getProcessEnvWithKey(s)
});

defineParameterType({ 
    name: 'array',
    regexp: /(([^,]+,)+[^,]+)/,
    transformer: s => getArray(s, '')
});

defineParameterType({ 
    name: 'int-array',
    regexp: /((\d+,)+\d+)/,
    transformer: s => getArray(s, 'int')
});

defineParameterType({ 
    name: 'base2-array',
    regexp: /(([01]+,)+[01]+)/,
    transformer: s => getArray(s, 'base2')
});

defineParameterType({ 
    name: 'base8-array',
    regexp: /(([0-7]+,)+[0-7]+)/,
    transformer: s => getArray(s, 'base8')
});

defineParameterType({ 
    name: 'base16-array',
    regexp: /(([0-9A-F]+,)+[0-9A-F]+)/,
    transformer: s => getArray(s, 'base16')
});

defineParameterType({ 
    name: 'float-array',
    regexp: /(([0-9\.]+,)+[0-9\.]+)/,
    transformer: s => getArray(s, 'float')
});

defineParameterType({ 
    name: 'bool',
    regexp: /true|TRUE|True|false|FALSE|False/,
    transformer: s => getBoolean(s)
});

defineParameterType({ 
    name: 'bool-array',
    regexp: /(((true|TRUE|True|false|FALSE|False),)+(true|TRUE|True|false|FALSE|False))/,
    transformer: s => getArray(s, 'boolean')
});

defineParameterType({ 
    name: 'json',
    regexp: /\{[^\}]*\}/,
    transformer: s => getJson(s)
});