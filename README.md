# SEARCH
## A text prediction tool for a given input dictionary
It is based on spell checker and word completion algorithm <br>
using _trie data structure_ and _bayes' theorm_.

<hr>

### How to use

##### git clone this repository in your working directory
> git clone https://github.com/migom6/searchtool.git
##### require the searchTool.js file in your project
```javascript
var search = require('./searchTool');
```
##### train the model with your training dictionary of strings
```javascript
search.train(<your training set>);
```
##### to predict your string from the training set 
```javascript
search.predict(<your testing string>);
```
<br>
<br>
<br>

[check examples folder for more referance](https://github.com/migom6/searchtool/tree/master/examples)
