function draw(){
  drawVerticalLines(5, 15);
  drawHorizontalLines(5, 10, 15);
}

function drawVerticalLine(x, lineWidth){
 var canvas = document.getElementById('amidakuji-canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  context.strokeStyle = '#1253A4';
  context.lineWidth = lineWidth;

  context.beginPath();
  context.moveTo(x,0);
  context.lineTo(x,$('#amidakuji-canvas').height());
  context.stroke();
}

function drawHorizontalLine(startX, endX, y, lineWidth){
 var canvas = document.getElementById('amidakuji-canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  context.strokeStyle = '#1253A4';
  context.lineWidth = lineWidth;

  context.beginPath();
  context.moveTo(startX, y);
  context.lineTo(endX, y);
  context.stroke();
}


function drawVerticalLines(n, lineWidth){

  var canvas = document.getElementById('amidakuji-canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  var diff = Math.floor(($('#amidakuji-canvas').width() - lineWidth)/(n - 1));

  for(var i = 0; i < n; i++){
    drawVerticalLine(Math.floor(lineWidth / 2) +  diff * i, lineWidth);
    addLotButton($('#amidakuji-canvas').offset().left + Math.floor(lineWidth / 2) +  diff * i, $('#amidakuji-canvas').offset().top);
  }
}

function drawHorizontalLines(columnN, rowN, lineWidth){

  var canvas = document.getElementById('amidakuji-canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  var offSet = 30;
  var columnDiff = Math.floor(($('#amidakuji-canvas').width() - lineWidth)/(columnN - 1));
  var rowDiff = Math.floor(($('#amidakuji-canvas').height() - lineWidth - offSet * 2)/(rowN - 1));

  for(var i = 0; i < columnN - 1; i++){
    for(var j = 0; j < rowN; j++){
      drawHorizontalLine(Math.floor(lineWidth / 2) + columnDiff * i, 
                         Math.floor(lineWidth / 2) + columnDiff * (i + 1), 
                         Math.floor(lineWidth / 2) + rowDiff * j + offSet, 
                         lineWidth);
    }
  }
}

function addLotButton(width, height) {
    var amidakuji = document.getElementById('button-area');
    var id = 'rotButton' + (amidakuji.getElementsByTagName('input').length).toString();

    $('#button-area').append(
        $('<input></input>')
            .attr('id', id)
            .attr('type', 'button')
    );

    var button = document.getElementById('amidakuji-canvas');

    $('#'+id).click(function(){
      alert(id);
    })

    return;
}