ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2-10,canv.height/2-10,20,20);
let a = 1;
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px,y:py});
  for(let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE-10,snake[i].y*SIZE-10,SIZE-2,SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while(snake.length > tail){
    snake.shift();
  }
  if(appleX == px && appleY == py){
    if(a == 2 || a == 3){
      tail = tail + 3;
    }else if(a == 10){
      tail = tail + 5;
    }else{
      tail++;
    }
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    a = Math.floor(Math.random()*10)+1;
  }
  document.getElementById
  console.log(a);
  if(a == 2 || a == 3){
    ctx.fillStyle = "blue";
    ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2)
  }else if(a == 10){
    ctx.fillStyle = "white";
    ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2)
  }else{
    ctx.fillStyle = "red"
    ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2)
  }
},1000/FPS);
