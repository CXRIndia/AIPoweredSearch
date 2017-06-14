var search= require('../searchTool');
search.train('how hi hello hound honolulu sorry kong');
console.log(search.predict('hllo'));