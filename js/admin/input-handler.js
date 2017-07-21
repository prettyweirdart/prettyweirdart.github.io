// Input handler for admin pages.
function savePage () {
	var content = $('#editor').trumbowyg('html');
	var title = comicVar.replace(/ /g, '-');
	var pageNum = $('#page-num').val();
	var imagePath = $('.output').html();
	var categories = $('#category').val();

	var request = JSON.stringify({ "type":"save", "title":title, "pageNum":pageNum, "imagePath":imagePath, "content":content, "categories":categories });

	$.post('http://127.0.0.1:8081/', { "comic":request });
}

function editComicTitle (editTitle) {
	var title = comicVar.replace(/ /g, '-');
	var request = JSON.stringify({ "type":"editAll", "title":title, "editTitle":editTitle });

	$.post('http://127.0.0.1:8081/', { "comic":request });
}

function deletePage (pageNum) {
	var title = comicVar.replace(/ /g, '-');
	var request = JSON.stringify({ "type":"delete", "title":title, "pageNum":pageNum });

	$.post('http://127.0.0.1:8081/', { "comic":request });
}

/* function createComic () {
	var title = $('#new-comic-title').val().replace(/ /g, '-');
	var request = JSON.stringify({ "type":"new", "title": title }); 
	
	$.post('http://127.0.0.1:8081', { "comic":request });
} */

function deleteComic () {
	var title = comicVar.replace(/ /g, '-');
	var request = JSON.stringify({ "type":"delete", "title":title, "pageNum":pageNum });

	$.post('http://127.0.0.1:8081/', { "comic":request });
}

function savePost () {
	var content = $('#editor').trumbowyg('html');
	var title = comicVar.replace(/ /g, '-');
	var date = $('#date').val();
	var imagePath = $('.output').html();
	var categories = $('#category').val();

	var request = JSON.stringify({ "type":"save", "title":title, "date":date, "imagePath":imagePath, "content":content, "categories":categories });
	
	$.post('http://127.0.0.1:8081/', { "post":request });
}

function deletePost () {
	var title = comicVar.replace(/ /g, '-');
	var request = JSON.stringify({ "type":"delete", "title":title });

	$.post('http://127.0.0.1:8081/', { "post":request });
}

function saveEvent () {
	var content = $('#editor').trumbowyg('html');
	var title = comicVar.replace(/ /g, '-');
	var startDate = $('#start-date').val();
	var endDate = $('#end-date').val();
	var imagePath = $('.output').html();

	var request = JSON.stringify({ "type":"save", "title":title, "startDate":startDate, "endDate":endDate, "imagePath":imagePath, "content":content });
	
	$.post('http://127.0.0.1:8081/', { "event":request });
}

function deleteEvent () {
	var title = comicVar.replace(/ /g, '-');
	var request = JSON.stringify({ "type":"delete", "title":title });

	$.post('http://127.0.0.1:8081/', { "event":request });
}