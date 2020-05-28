var isWhitesTurn = 1;

var lastMove = {
  from: "",
  to: ""
};

var lastCapture = {
  from: "",
  to: "",
  capturer: "",
  capturee: "",
  captureeClass: ""
};
var blackPieces = {};
var whitePieces = {};

var getinterval;

window.onload = buildTable;

`var code = prompt("Enter the game code");
var thisPlayer = prompt("Enter the pawn You would like to control");`
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
var code = getUrlVars()["code"]
var thisPlayer = getUrlVars()["color"]

var isThisPlayersTurn = thisPlayer == "w" ? 1 : 0;
if (thisPlayer == "b") {
  getinterval = setInterval(getPositions, 1000);
}
function allow(ev) {
  ev.preventDefault();
}

function printlastMove() {
  var player = thisPlayer == "w" ? "White" : "Black";
  var div = document.getElementById("div1");
  div.innerHTML +=
    lastMove.from + " to " + lastMove.to + "<br>" + player + "'s Turn <br>";
}
function changeLastCapture(lc) {
  lastCapture = lc;
  var div = document.getElementById("div1");
  div.innerHTML += lastCapture.capturer + " captured " + lastCapture.capturee;
}
function getPositions() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.responseText);
    if (
      this.readyState == 4 &&
      this.status == 200 &&
      this.responseText != null &&
      this.responseText != undefined &&
      this.responseText.charAt(0) == "{"
    ) {
      //alert(this.responseText);
      var pieces = JSON.parse(this.responseText);
      if (isWhitesTurn != pieces["wt"]) {
        whitePieces = pieces["w"];
        blackPieces = pieces["b"];
        lastMove = pieces["lm"];
        isWhitesTurn = pieces["wt"];
        if (
          lastCapture.from != pieces["lc"].from ||
          lastCapture.to != pieces["lc"].to ||
          lastCapture.capturer != pieces["lc"].capturer ||
          lastCapture.capturee != pieces["lc"].capturee
        ) {
          changeLastCapture(pieces["lc"]);
        }
        placePieces();
        printlastMove();
        clearInterval(getinterval);
      } else {
        console.log(this.responseText);
      }
    }
  };

  xhttp.open("POST", "http://localhost:4000/api/getboard", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("Authorization", `Bearer ${localStorage.getItem("token")}`);
  console.log("sent request for boardb");
  xhttp.send( JSON.stringify({
    "code" : code
  }));
}

function sendRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
      console.log("sent data successfully");
  };
  var pieces = {
    w: whitePieces,
    b: blackPieces,
    wt: isWhitesTurn,
    lm: lastMove,
    lc: lastCapture
  };
  xhttp.open(
    "POST",
    "http://localhost:4000/api/setboard",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("Authorization", `Bearer ${localStorage.getItem("token")}`);
  xhttp.send(JSON.stringify({
    "code" : code,
    "pieces" : JSON.stringify(pieces)
  }));
}

function checkCheck() {
  var arr = [];
  var t = isWhitesTurn;
  isWhitesTurn = 0;
  for (var key in blackPieces) {
    for (var i = 0; i < blackPieces[key].length; i++) {
      if (key != "king" && blackPieces[key][i] != -1) {
        arr = enableDrop(blackPieces[key][i], "img " + key);
        //console.log(arr);
        //console.log(blackPieces[key][i]);
        //console.log("img "+key);

        if (arr.indexOf(whitePieces["king"][0]) > -1) {
          //console.log("w");
          isWhitesTurn = t;
          return "w";
        }
      }
    }
  }
  var arr = [];
  isWhitesTurn = 1;
  for (var key in whitePieces) {
    for (var i = 0; i < whitePieces[key].length; i++) {
      if (key != "king" && whitePieces[key][i] != -1) {
        arr = enableDrop(whitePieces[key][i], "img " + key);
        //console.log(arr);
        //console.log(whitePieces[key][i]);
        //console.log("img "+key);
        if (arr.indexOf(blackPieces["king"][0]) > -1) {
          //console.log("b");
          isWhitesTurn = t;
          return "b";
        }
      }
    }
  }
  isWhitesTurn = t;
  return 0;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  div1 = document.getElementById("div1");
  div1.innerHTML = div1.innerHTML + ev.target.parentNode.id + " to ";
  //alert(ev.target.className);
  allowDrop(enableDrop(ev.target.parentNode.id, ev.target.className));
  lastMove["from"] = ev.target.parentNode.id;
}

function changeTurn() {
  if (isWhitesTurn == 1) {
    div1.innerHTML = div1.innerHTML + "Black's Turn" + "<br/>";
    isWhitesTurn = 0;
    isThisPlayersTurn = !isThisPlayersTurn;
  } else if (isWhitesTurn == 0) {
    div1.innerHTML = div1.innerHTML + "White's Turn" + "<br/>";
    isWhitesTurn = 1;
    isThisPlayersTurn = !isThisPlayersTurn;
  }
}
function handleDrop(data, ev) {
  if (
    ev.target.id.charAt(0) != "(" &&
    (ev.target.id.charAt(0) == "w" || ev.target.id.charAt(0) == "b")
  ) {
    div1.innerHTML = div1.innerHTML + ev.target.parentNode.id + "<br/>";
    div1.innerHTML =
      div1.innerHTML + data + " captured " + ev.target.id + "<br/>";
    lastMove["to"] = ev.target.parentNode.id;
    lastCapture.from = lastMove.from;
    lastCapture.to = lastMove.to;
    lastCapture.capturee = ev.target.id;
    lastCapture.capturer = data;
    lastCapture.captureeClass = ev.target.className;
    makeNull(ev.target.parentNode.id);
    ev.target.parentNode.appendChild(document.getElementById(data));
    ev.target.parentNode.removeChild(ev.target);
  } else {
    ev.target.appendChild(document.getElementById(data));
    div1.innerHTML = div1.innerHTML + ev.target.id + "<br/>";
    lastMove["to"] = ev.target.id;
  }
}
function reverseLastMove() {
  /*console.log(document.getElementById(lastMove.to).childNodes);
	console.log(document.getElementById(lastMove.from));
	console.log(lastMove.from);
	console.log(lastMove.to);*/

  if (lastMove.from == lastCapture.from && lastMove.to == lastCapture.to) {
    var img = document.createElement("img");
    var type = "",
      piece = "",
      index = 0;
    var type = lastCapture.capturee.substring(0, 5);
    var index = eval(
      lastCapture.capturee.charAt(lastCapture.capturee.length - 1)
    );
    var piece = lastCapture.captureeClass.substring(4);
    img.className = lastCapture.captureeClass;
    img.id = lastCapture.capturee;
    img.src = "Images/" + type + "/" + piece + ".png";
    img.addEventListener("dragstart", drag);
    if (type.charAt(0) == "w") whitePieces[piece][index] = lastMove.to;
    else blackPieces[piece][index] = lastMove.to;

    img.className =
      "img " +
      document
        .getElementById(lastMove.from)
        .appendChild(document.getElementById(lastMove.to).childNodes[0]);
    document.getElementById(lastMove.to).appendChild(img);
  } else {
    document
      .getElementById(lastMove.from)
      .appendChild(document.getElementById(lastMove.to).childNodes[0]);
  }
  var a = lastMove.to;
  lastMove.to = lastMove.from;
  lastMove.from = a;

  changeCoordinates();
  lastMove = lastlastMove;
  var a = lastCapture.from;
  lastCapture.from = lastCapture.to;
  lastCapture.to = a;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  handleDrop(data, ev);
  changeCoordinates();
  var check = checkCheck();
  if (check != "0") {
    var span = document.createElement("span");
    var div = document.getElementById("div1");
    span.innerHTML = check == "b" ? "Black" : "White";
    span.innerHTML += " King Is under Check";
    div.appendChild(span);
    div.innerHTML += "<br>";
  }

  //console.log(blackPieces);
  //console.log(whitePieces);
  //console.log("whiteturn"+isWhitesTurn);
  //console.log(check);
  if (
    (isWhitesTurn == 1 && check == "w") ||
    (isWhitesTurn == 0 && check == "b")
  ) {
    //console.log(lastMove.from);
    //console.log(lastMove.to);
    lastlastMove = JSON.parse(JSON.stringify(lastMove));
    reverseLastMove();
    disableDrop();
  } else {
    disableDrop();
    changeTurn();
  }
  sendRequest();
  getinterval = setInterval(getPositions, 1000);
}

function disableDrop() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      document
        .getElementById("(" + i + "," + j + ")")
        .removeEventListener("dragover", allow);
    }
  }
}

function allowDrop(arr) {
  //console.log(arr.length);
  for (var i = 0; i < arr.length; i++) {
    var x = arr[i].charAt(1);
    var y = arr[i].charAt(3);
    x = eval(x);
    y = eval(y);
    //console.log("("+(x)+","+y+")");
    document
      .getElementById("(" + x + "," + y + ")")
      .addEventListener("dragover", allow);
  }
}

function buildTable() {
  var board = document.getElementById("osr");

  if (board != null) {
    for (var i = 0; i < 8; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < 8; j++) {
        var td = document.createElement("td");
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            td.className = "a";
          } else {
            td.className = "b";
          }
        } else {
          if (j % 2) {
            td.className = "a";
          } else {
            td.className = "b";
          }
        }

        td.addEventListener("drop", drop);
        td.id = "(" + i + "," + j + ")";
        tr.appendChild(td);
      }

      board.appendChild(tr);
    }
    initialisePositions();
  } else {
    console.log("Not working");
  }
}

function enableDrop(position, pieceType) {
  //alert("a");
  var arr = [];
  pieceType = pieceType.substring(4);
  k;
  switch (pieceType) {
    case "pawn":
      arr = pawnTargets(position);
      break;
    case "rook":
      arr = rookTargets(position);
      break;
    case "bishop":
      arr = bishopTargets(position);
      break;
    case "queen":
      arr = queenTargets(position);
      break;
    case "king":
      arr = kingTargets(position);
      break;
    case "knight":
      arr = knightTargets(position);
      break;
  }
  //console.log(enableDrop.caller);

  return arr;
}

function initialisePositions() {
  blackPieces["pawn"] = new Array(
    "(6,0)",
    "(6,1)",
    "(6,2)",
    "(6,3)",
    "(6,4)",
    "(6,5)",
    "(6,6)",
    "(6,7)"
  );
  whitePieces["pawn"] = new Array(
    "(1,0)",
    "(1,1)",
    "(1,2)",
    "(1,3)",
    "(1,4)",
    "(1,5)",
    "(1,6)",
    "(1,7)"
  );
  blackPieces["bishop"] = new Array("(7,2)", "(7,5)");
  whitePieces["bishop"] = new Array("(0,2)", "(0,5)");
  blackPieces["rook"] = new Array("(7,0)", "(7,7)");
  whitePieces["rook"] = new Array("(0,0)", "(0,7)");
  blackPieces["knight"] = new Array("(7,1)", "(7,6)");
  whitePieces["knight"] = new Array("(0,1)", "(0,6)");
  blackPieces["queen"] = new Array("(7,3)");
  whitePieces["queen"] = new Array("(0,3)");
  blackPieces["king"] = new Array("(7,4)");
  whitePieces["king"] = new Array("(0,4)");
  placePieces();
}

function placePieces() {
  k = 0;
  var images = document.getElementsByTagName("img");
  var l = images.length;
  for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
  }
  for (var key in blackPieces) {
    //console.log(key);
    for (var i = 0; i < blackPieces[key].length; i++) {
      var piece = document.createElement("img");
      piece.className = "img " + key;
      if (thisPlayer == "b") {
        piece.draggable = true;
        piece.addEventListener("dragstart", drag);
      }
      piece.id = "black" + key + i;
      piece.src = "Images/black/" + key + ".png";
      if (blackPieces[key][i] != -1)
        if (document.getElementById(blackPieces[key][i]) != null)
          document.getElementById(blackPieces[key][i]).appendChild(piece);
    }
  }

  for (var key in whitePieces) {
    for (var i = 0; i < whitePieces[key].length; i++) {
      var piece = document.createElement("img");
      piece.className = "img " + key;
      if (thisPlayer == "w") {
        piece.draggable = true;
        piece.addEventListener("dragstart", drag);
      }
      piece.id = "white" + key + i;
      piece.src = "Images/white/" + key + ".png";
      if (whitePieces[key][i] != -1)
        if (document.getElementById(whitePieces[key][i]) != null)
          document.getElementById(whitePieces[key][i]).appendChild(piece);
    }
  }
}
function changeCoordinates() {
  for (var key in blackPieces) {
    for (var i = 0; i < blackPieces[key].length; i++) {
      if (blackPieces[key][i] == lastMove.from) {
        blackPieces[key][i] = lastMove.to;
        return;
      }
    }
  }
  for (var key in whitePieces) {
    for (var i = 0; i < whitePieces[key].length; i++) {
      if (whitePieces[key][i] == lastMove.from) {
        whitePieces[key][i] = lastMove.to;
        return;
      }
    }
  }
}
