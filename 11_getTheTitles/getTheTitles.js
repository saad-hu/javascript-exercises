const getTheTitles = function(books) {
    //Implementation 1
    // let titles = []; //creating an empty array

    // for(let i = 0; i < books.length; i++) {
    //     titles[i] = books[i].title;
    // }
    // return titles;

    //Implementation 2
    let titles = books.map(book => book.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
