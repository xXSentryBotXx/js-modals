function modal () {
  var modal = document.createElement('div');
  modal.style.cssText = [
    'display: none;',
    'overflow: auto;',
    'left: 0;',
    'top: 0;',
    'position: fixed;',
    'width: 100%;',
    'height: 100%;',
    'background-color: rgba(0, 0, 0, 0.4);',
    'z-index: 1;'
  ].join(' ');

  document.body.appendChild(modal);

  function show(params) {
    loadTemplate(params);
    modal.style.display = 'block';
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function loadTemplate (params) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        modal.innerHTML = xmlhttp.responseText;
        params.script ? params.script() : null;
      }
    };
    xmlhttp.open('GET', params.templateURL, true);
    xmlhttp.send(null);
  }

  return {
    show: show
  }
}
