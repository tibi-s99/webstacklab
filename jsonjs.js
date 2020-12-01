var pageCounter = 1;
var musicContainer = document.getElementById("music-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'music-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " *--sang by--* " + data[i].artist + " ";
    
    for (ii = 0; ii < data[i].detail.release.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].detail.release[ii];
      } else {
        htmlString += " *--Released on--* " + data[i].detail.release[ii];
      }
    }

    htmlString += ' *---ft.---* ';

    for (ii = 0; ii < data[i].detail.ft.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].detail.ft[ii];
      } else {
        htmlString += "  " + data[i].detail.ft[ii];
      }
    }

    htmlString += '.</p>';

  }

  musicContainer.insertAdjacentHTML('beforeend', htmlString);
}