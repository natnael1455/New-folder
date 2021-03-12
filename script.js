window.onload = function () {
  let  canvas=document.getElementById("mycanvas");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log(mousePos);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="#FC00FF";
    ctx.arc(mousePos.x, mousePos.y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle="#fffc00";
    ctx.arc(mousePos.x, mousePos.y+20, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle="#00FFFC";
    ctx.arc(mousePos.x, mousePos.y-20, 10, 0, 2 * Math.PI);
    ctx.fill();
  });
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }