# cucumber-expression-extender
[Prerequisites](#Prerequisites "Prerequisites") | [Installation](#Installation "Installation") | [Manual](#Manual "Manual")

<p>
Cucumber expression extender is a simple Cucumber's plugin to extend the tags expressions for easier feature files writings.
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

```javscript
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
npm install cucumber-expression-extender
```

<a name="Manual"></a>
<h2>Manual</h2>
<p>
Once Cucumber expression extender is installed, </p>
<p> you can require it in your project: </p>

```javascript
require('cucumber-expression-extender');
```

<p>
And that's it, </p>
<p>you can now integrate it in your step definitions: </p>

```javascript
Given('{dd-mm-yy} is a nice date', 
(dateObject) => {
    console.log('indeed nice date ',
        dateObject.toString());
});
```

<p>
And you can use the new step in feature file

```javascript
Given 01-02-21 is a nice date
```


<h2> Supported types </h2> 
    <table>
        <thead>
            <th>expression</th>
            <th>what is it</th>
            <th>examples</th>
        </tead>
        <tbody>
        <tr>
            <td>dd-mm-yy</td>
            <td>date pattern day(2 digits), month(2 digits), year(2 digits)</td>
            <td>19-11-89, 19/11/89</td>
        </tr>
        <tr>
            <td>mm-dd-yy</td>
            <td>date pattern month(2 digits), day(2 digits), year(2 digits)</td>
            <td>11-19-89, 11/19/89</td>
        </tr>
        <tr>
            <td>dd-mm-yyyy</td>
            <td>date pattern day(2 digits), month(2 digits), year(4 digits)</td>
            <td>19-11-1989, 19/11/1989</td>
        </tr>
        <tr>
            <td>mm-dd-yyyy</td>
            <td>date pattern month(2 digits), day(2 digits), year(4 digits)</td>
            <td>11-19-1989, 11/19/1989</td>
        </tr>
        </tbody>
    </table>

    