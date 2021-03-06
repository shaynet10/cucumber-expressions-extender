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
        <tr>
            <td>non-space</td>
            <td>any keyboard letters which are not spaces/tabs/new lines</td>
            <td>312!`,.?;</td>
        </tr>
        <tr>
            <td>env</td>
            <td>value stored in process.env[KEY]</td>
            <td>ENV["KEY"] or ENV['KEY']</td>
        </tr>
        <tr>
            <td>array</td>
            <td>list of values separated by a comma ","</td>
            <td>a,b,b,c,!,`</td>
        </tr>
        <tr>
            <td>int-array</td>
            <td>list of integer values separated by a comma ","</td>
            <td>1,2,30,6</td>
        </tr>
        <tr>
            <td>base2-array</td>
            <td>list of base2 (binary) values separated by a comma ","</td>
            <td>1,001,110,101</td>
        </tr>
        <tr>
            <td>base8-array</td>
            <td>list of base8 (octal) values separated by a comma ","</td>
            <td>3,4,57,70</td>
        </tr>
        <tr>
            <td>base16-array</td>
            <td>list of base16 (hex) values separated by a comma ","</td>
            <td>4,5,C,FFF</td>
        </tr>
        <tr>
            <td>float-array</td>
            <td>list of float values separated by a comma ","</td>
            <td>1.0,2.3,4.3589</td>
        </tr>
        <tr>
            <td>bool</td>
            <td>string value represnting true/false values</td>
            <td>true or TRUE or True or false or FALSE or False</td>
        </tr>
        <tr>
            <td>bool-array</td>
            <td>list of boolean values separated by a comma ","</td>
            <td>true,FALSE,False,TRUE,True,false</td>
        </tr>
        <tr>
            <td>json</td>
            <td>json structrue to later be converted to object
            <p><b>ensure you specify a valid JSON data</b></p>
            </td>
            <td>{"a":1, "b":2, "c":5, "e":"f"}</td>
        </tr>
        </tbody>
    </table>

    