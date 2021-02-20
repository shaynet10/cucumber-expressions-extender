# cucumber-expressions-extender
[Prerequisites](#Prerequisites "Prerequisites") | [Installation](#Installation "Installation") | [Manual](#Manual "Manual")

<p>
Cucumber expressions extender is a simple Cucumber's plugin to extend the tags expressions for easier feature files writings.
<p>

<h2> Why </h2>
<p>
It helps writing cleaner feature files without complex regular expressions.
</p>
<p>Writing something like </p> 
```javascript
Given 21-11-2015 is nice
```
<p>can be translated by</p>
```javascript
Given('{dd-mm-yy} is nice '
```
<p> Instead of: </p>
```javascript
Given(/^(\d+)\-(\d+)\-(\d+) is nice$/
```

<a name="Prerequisites"></a>
<h2> Prerequisites </h2>
<p>In order to use this plugin:</p>
<p>
    <ul>
        <li>Cucumber must be installed.</li>
    </ul>
</p>

<a name="Installation"></a>
<h2>Installation</h2>
<p>To install the plugin to your project please use:</p>

```javascript
npm install cucumber-expressions-extender
```
<p>
You'll probably prefer to add it to your package.json file so you can use:</p>

```
npm install --save-dev cucumber-expressions-extender
```

<a name="Manual"></a>
<h2>Manual</h2>
<p>
Once Cucumber expressions extender is installed, you can require it in your project:

```javascript
require('cucumber-expressions-extender');
```
</p>
<p>
And that's it, you can now integrate it in your step definitions:

```javascript
Given('{dd-mm-yy} is a nice date', (dateObject) => {
    console.log('indeed nice date ', dateObject.toString());
});
```
</p> 

<p>
And you can use the new step in feature file

```javascript
        Given 01-02-21 is a nice date
```

