canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(225,210,430,200);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(340,295,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(435,295,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(530,295,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(390,330,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(490,330,40,0,2*Math.PI);
ctx.stroke();