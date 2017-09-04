// Edit post.js
(function() {
  var searchTerm = window.location.hash.split('#')[1];

  if (searchTerm) {
    // document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('categories');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'categories': window.store[key].categories,
        'content': window.store[key].content,
      });

      editPostResults = idx.search(searchTerm); // Get lunr to perform a search
    }
  }
})();