const { Given, When, Then } = require('@cucumber/cucumber');
require('../../index');

Given('{dd-mm-yy} is a nice date', (dateObject) => {
    console.log('indeed nice date ', dateObject.toString());
});

Given('{dd-mm-yyyy} is a nice {non-space}', (dateObject, str) => {
    console.log('indeed nice date ', dateObject.toString(), ' with str ', str);
});

Given('{env} = {env}', (envVal1, envVal2) => {
    console.log('val1 ', envVal1, ' val2 ', envVal2);
});

Given('{array} is an array', (values) => {
    console.log('array is: ', values);
});

Given('{int-array} is an int array', (values) => {
    console.log('array int is: ', values);
});

Given('{base2-array} is an int base2 array', (values) => {
    console.log('array base2 is: ', values);
});

Given('{base8-array} is an int base8 array', (values) => {
    console.log('array base8 is: ', values);
});

Given('{base16-array} is an int base16 array', (values) => {
    console.log('array base16 is: ', values);
});

Given('{float-array} is a float array', (values) => {
    console.log('array float is: ', values);
});

Given('{bool} is a valid boolean value', (value) => {
    console.log('Boolean value is: ', value);
    if(value) {
        console.log('It equals to true');
    } else {
        console.log('It equals to false');
    }
});

Given('{bool-array} is a valid boolean array', (values) => {
    console.log('array Boolean is: ', values);
    console.log(`with ${values.filter((v) => !!(v)).length} elements as true`);
    console.log(`with ${values.filter((v) => !(v)).length} elements as false`);
});