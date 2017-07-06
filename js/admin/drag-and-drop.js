(function () {
	// Enable Drag-and-Drop Image selector.
    var dropzone = document.querySelector('.dropzone');
    function logFile(files) {
      console.log(files);
      var output = document.querySelector('.output');
      output.innerHTML = '';
      for(var i=0; i<files.length; i++) {
        if(files[i].type.indexOf('image/') === 0) {
          output.innerHTML += '<img width="200" src="' + URL.createObjectURL(files[i]) + '" />';
        }
        output.innerHTML += '<p>'+files[i].name+'</p>';
      }
    }
    makeDroppable(dropzone, logFile);
    })();