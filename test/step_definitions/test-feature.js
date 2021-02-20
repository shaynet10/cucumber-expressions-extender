const { Given, When, Then } = require('@cucumber/cucumber');
require('../../index');

Given('{dd-mm-yy} is a nice date', (dateObject) => {
    console.log('indeed nice date ', dateObject.toString());
});

Given('{dd-mm-yyyy} is a nice date', (dateObject) => {
    console.log('indeed nice date ', dateObject.toString());
});
