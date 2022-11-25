const getTheTitles = function(books) {
    var titles=[]
    books.forEach(element => {titles.push(element.title)
    });
    return titles

};

// Do not edit below this line
module.exports = getTheTitles;
