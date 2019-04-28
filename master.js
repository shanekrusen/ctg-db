window.onload = function() {
  var loaded = { } 

  var popTable = function() {
    listTable.innerHTML = "";
    for (x in loaded) {
      var row = listTable.insertRow(-1);
      var cell = row.insertCell(-1);
      cell.innerHTML = x;
      var cell = row.insertCell(-1);
      cell.innerHTML = loaded[x]["language"];
      var cell = row.insertCell(-1);
      cell.innerHTML = loaded[x]["website"] + "<br />";
      cell.innerHTML += loaded[x]["phone"] + "<br />";
      cell.innerHTML += loaded[x]["email"] + "<br />";
    }
  } 

  var listTable = document.getElementById('list');
  var x;
  for (x in db) {
    loaded[x] = db[x];  
  }

  popTable();

  document.getElementById("submit").onclick = function() {
    loaded = { }
    if (document.getElementById("lang").value == "any") {
      for (x in db) {    
        loaded[x] = db[x]
      }
    } else {
      for (x in db) {
        if (db[x]["language"] == document.getElementById("lang").value) {
          loaded[x] = db[x]
        }
      }
    }
    popTable();
  }
}
