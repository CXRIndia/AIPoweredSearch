var search= require('../searchTool');
search.train('how hi hello hound honolulu');
console.log(search.predict('ho'));