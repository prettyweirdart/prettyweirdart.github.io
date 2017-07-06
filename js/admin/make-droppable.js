function triggerCallback(e, callback) {
  
  if(!callback || typeof callback !== 'function') {
    console.log('urk!');
    return;
  }
  var files;
  if(e.dataTransfer) {
    files = e.dataTransfer.files;
  } else if(e.target) {
    files = e.target.files;
  }
  callback.call(null, files);
}

function makeDroppable(element, callback) {

  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('multiple', false);
  input.style.display = 'none';

  input.addEventListener('change', function(e) {
        triggerCallback(e, callback);
      });
  element.appendChild(input);
  
  element.addEventListener('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    element.classList.add('dragover');
  });

  element.addEventListener('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    element.classList.remove('dragover');
  });

  element.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    element.classList.remove('dragover');
    triggerCallback(e);
  });
  
  element.addEventListener('click', function() {
    input.value = null;
    input.click();
  });
}