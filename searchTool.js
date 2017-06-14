var speller = require('./speller');
var completion = require('./completion');

class searchTool {
    train(string1){
        speller.train(string1);
        completion.train(string1);
    }
    predict(input) {
        
        let output = [];
        for (var key in speller.correct(input)) {
            if(key != "isEmpty"){
                output.push(key);
            }
        }
        return output.concat(completion.predictWord(input));
    }
}

var search = new searchTool();
module.exports = search;
search.train('hi, how are you');
console.log(search.predict('hiw'));