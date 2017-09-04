// populate-post-editors.js – a separate script b/c must have dependencies loaded first.
(function () {
	if (editPostResults.length) {
    var item = store[editPostResults[0].ref];

    $('#editor').trumbowyg('html', item.content);

    $('#title').val(item.title);
    $('#title').css('placeholder', '');

    $('.output').html('<img src="' + item.image_path + '" /> <br />URL: ' + item.image_path);

    if ($('#date').length) {
        var date = item.date;
        $('#date').val(date);
    }

    if ($('#start-date').length) {
        var startDate = item.start-date;
        $('#start-date').val(startDate);
    }

    if ($('#end-date').length) {
        var endDate = item.end-date;
        $('#end-date').val(endDate);
    }

    if ($('#page-num').length) {
        $('#page-num').val(item.page_num);
    }

    if ($('#category').length) {
        $('#category').val(item.categories);
    }    
  }
})();

