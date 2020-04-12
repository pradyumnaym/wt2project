function makeNull(id) {
  for (var key in blackPieces) {
    for (var i = 0; i < blackPieces[key].length; i++) {
      if (blackPieces[key][i] == id) {
        //console.log("makenull");
        blackPieces[key][i] = -1;
      }
    }
  }
  for (var key in whitePieces) {
    for (var i = 0; i < whitePieces[key].length; i++) {
      if (whitePieces[key][i] == id) {
        whitePieces[key][i] = -1;
      }
    }
  }
  return 0;
}

function pawnTargets(position) {
  var x = position.charAt(1);
  var y = position.charAt(3);
  x = eval(x);
  y = eval(y);
  var arr = new Array();
  var k = 0;
  var img = document.getElementById(position).firstChild;
  if (img.id.charAt(0) == "w" && isWhitesTurn == 1) {
    //console.log("a");
    if (notInList("(" + (x + 1) + "," + y + ")") == 0)
      arr[k++] = "(" + (x + 1) + "," + y + ")";
    if (notInList("(" + (x + 1) + "," + (y + 1) + ")") == "b")
      arr[k++] = "(" + (x + 1) + "," + (y + 1) + ")";
    if (notInList("(" + (x + 1) + "," + (y - 1) + ")") == "b")
      arr[k++] = "(" + (x + 1) + "," + (y - 1) + ")";
    if (x == 1) {
      if (notInList("(" + (x + 2) + "," + y + ")") == 0)
        arr[k++] = "(" + (x + 2) + "," + y + ")";
      return arr;
    }
  } else if (isWhitesTurn == 0 && img.id.charAt(0) == "b") {
    //console.log("b");
    if (notInList("(" + (x - 1) + "," + y + ")") == 0)
      arr[k++] = "(" + (x - 1) + "," + y + ")";
    if (notInList("(" + (x - 1) + "," + (y + 1) + ")") == "w")
      arr[k++] = "(" + (x - 1) + "," + (y + 1) + ")";
    if (notInList("(" + (x - 1) + "," + (y - 1) + ")") == "w")
      arr[k++] = "(" + (x - 1) + "," + (y - 1) + ")";
    if (x == 6) {
      if (notInList("(" + (x - 2) + "," + y + ")") == 0)
        arr[k++] = "(" + (x - 2) + "," + y + ")";
      return arr;
    }
  }
  return arr;
}

function notInList(position) {
  for (var key in blackPieces) {
    for (var i = 0; i < blackPieces[key].length; i++) {
      if (blackPieces[key][i] == position) {
        return "b";
      }
    }
  }
  for (var key in whitePieces) {
    for (var i = 0; i < whitePieces[key].length; i++) {
      if (whitePieces[key][i] == position) {
        //if (position == "(3,6)")
        //console.log("yes");
        return "w";
      }
    }
  }
  return 0;
}
function addToList(arr, img, x, y) {
  //console.log("addtl");
  //console.log(arr);
  //console.log(y);
  if (notInList("(" + x + "," + y + ")") == 0) {
    arr[arr.length] = "(" + x + "," + y + ")";
    return 0;
  } else if (
    (notInList("(" + x + "," + y + ")") == "w" && img.id.charAt(0) == "b") ||
    (notInList("(" + x + "," + y + ")") == "b" && img.id.charAt(0) == "w")
  ) {
    //console.log("yyy");
    arr[arr.length] = "(" + x + "," + y + ")";
    return 1;
  } else return 2;
}

function rookTargets(position) {
  var x = position.charAt(1);
  var y = position.charAt(3);
  x = eval(x);
  y = eval(y);
  var arr = new Array();
  var img = document.getElementById(position).firstChild;
  if (
    (img.id.charAt(0) == "w" && isWhitesTurn == 1) ||
    (img.id.charAt(0) == "b" && isWhitesTurn == 0)
  ) {
    //console.log("y0");
    for (var j = y - 1; j >= 0; j--) {
      if (addToList(arr, img, x, j) != 0) break;
    }
    for (var j = y + 1; j < 8; j++) {
      if (addToList(arr, img, x, j) != 0) break;
    }
    for (var j = x - 1; j >= 0; j--) {
      if (addToList(arr, img, j, y) != 0) break;
    }
    for (var j = x + 1; j < 8; j++) {
      if (addToList(arr, img, j, y) != 0) break;
    }
  }
  //console.log(arr);
  return arr;
}

function bishopTargets(position) {
  var x = position.charAt(1);
  var y = position.charAt(3);
  x = eval(x);
  y = eval(y);
  x1 = x;
  y1 = y;

  var arr = new Array();
  var img = document.getElementById(position).firstChild;
  if (
    (img.id.charAt(0) == "w" && isWhitesTurn == 1) ||
    (img.id.charAt(0) == "b" && isWhitesTurn == 0)
  ) {
    while (x < 7 && y < 7) {
      if (addToList(arr, img, ++x, ++y) != 0) break;

      //console.log(arr[k-1]);
    }
    x = x1;
    y = y1;
    //console.log(x);
    //console.log(y);
    while (x > 0 && y < 7) {
      if (addToList(arr, img, --x, ++y) != 0) break;

      //console.log("1");
      //console.log(arr[k-1]);
    }
    x = x1;
    y = y1;

    while (x > 0 && y > 0) {
      if (addToList(arr, img, --x, --y) != 0) break;
      //console.log("2");
      //console.log(arr[k-1]);
    }
    x = x1;
    y = y1;
    while (x < 7 && y > 0) {
      if (addToList(arr, img, ++x, --y) != 0) break;
      //console.log("3");
      //console.log(arr[k-1]);
    }
  }
  return arr;
}

function queenTargets(position) {
  var img = document.getElementById(position).firstChild;
  if (
    (img.id.charAt(0) == "w" && isWhitesTurn == 1) ||
    (img.id.charAt(0) == "b" && isWhitesTurn == 0)
  ) {
    return bishopTargets(position).concat(rookTargets(position));
    //console.log("yo");
  } else return [];
}

function kingTargets(position) {
  var img = document.getElementById(position).firstChild;
  var arr = new Array();
  if (
    (img.id.charAt(0) == "w" && isWhitesTurn == 1) ||
    (img.id.charAt(0) == "b" && isWhitesTurn == 0)
  ) {
    var x = position.charAt(1);
    var y = position.charAt(3);
    x = eval(x);
    y = eval(y);

    for (var i = 0; i <= 7; i++) {
      for (var j = 0; j <= 7; j++) {
        if (
          (i == x + 1 && j == y + 1) ||
          (i == x - 1 && j == y + 1) ||
          (i == x + 1 && j == y - 1) ||
          (i == x - 1 && j == y - 1) ||
          (i == x && j == y + 1) ||
          (i == x && j == y - 1) ||
          (i == x + 1 && j == y) ||
          (i == x - 1 && j == y)
        ) {
          addToList(arr, img, i, j);
        }
      }
    }
  }
  return arr;
}

function knightTargets(position) {
  var img = document.getElementById(position).firstChild;
  var arr = new Array();
  if (
    (img.id.charAt(0) == "w" && isWhitesTurn == 1) ||
    (img.id.charAt(0) == "b" && isWhitesTurn == 0)
  ) {
    var x = position.charAt(1);
    var y = position.charAt(3);
    x = eval(x);
    y = eval(y);

    for (var i = 0; i <= 7; i++) {
      for (var j = 0; j <= 7; j++) {
        if (
          (i == x + 1 && j == y + 2) ||
          (i == x + 1 && j == y - 2) ||
          (i == x - 1 && j == y + 2) ||
          (i == x - 1 && j == y - 2) ||
          (i == x + 2 && j == y + 1) ||
          (i == x - 2 && j == y + 1) ||
          (i == x + 2 && j == y - 1) ||
          (i == x - 2 && j == y - 1)
        ) {
          addToList(arr, img, i, j);
        }
      }
    }
  }
  return arr;
}
