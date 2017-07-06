// populate-post-editors.js – a separate script b/c must have dependencies loaded first.
(function () {
	if (editPostResults.length) {
    var item = store[editPostResults[0].ref];

    var editorContent = item.content;
    $('#editor').trumbowyg('html', editorContent);

    var postTitle = item.title;
    $('#title').val(postTitle);
    $('#title').css('placeholder', '');

    var categories = item.categories;
    $('#category').val(categories);

    var imagePath = item.image_path;
    $('.output').html('<img src="' + imagePath + '" /> <br />Local URL: ' + item.image_path);
  }
})();

