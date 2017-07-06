// Edit page.js
(function() {
  var lrv = window.location.hash.split('#')[1];
  var searchTerm = lrv.split('Page')[0];

  if (searchTerm) {
    // document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('category');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'category': window.store[key].category,
        'content': window.store[key].content
      });

      editPostResults = idx.search(searchTerm); // Get lunr to perform a search
    }
  }
})();