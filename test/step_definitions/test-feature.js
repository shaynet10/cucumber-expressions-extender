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
