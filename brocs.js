var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");

var dx = 5
var dy = -9
var x = canvas.width/2
var y = canvas.height-30
var ballRadius = 20
var paddleHeight = 30
var paddleWidth = 200
var paddleX = (canvas.width-paddleWidth) / 2
var rightPressed = false
var leftPressed = false


document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)


function drawBall(){
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI*2)
    ctx.fillStyle="#F2A007"
    ctx.fill()
    ctx.closePath()
}

function drawPaddle(){
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = "#D9BD89"
    ctx.fill()
    ctx.closePath()
}
function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    
    x += dx
    y += dy
    
        if(y + dy < ballRadius){
            dy = -dy;   
        }else if(y + dy > canvas.height-ballRadius){
            if(x > paddleX && x < paddleX + paddleWidth){
                dy = -dy
            }else{
                alert("the GAME is OVER")
                document.location.reload()
                clearInterval(interval)
            }
        }
        if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
            dx = -dx;
        }
        if(rightPressed){
            paddleX += 9
            if(paddleX + paddleWidth > canvas.width){
                paddleX = canvas.width - paddleWidth
            }
        }else if(leftPressed){
            paddleX += -9
            if(paddleX < 0){
                paddleX = 0
            }
        }
    drawBall()
    drawPaddle()
    drawBricks()
    drawScore()
    collisionDetection()
        }

        
       


function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true
    }else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true
    }
}

function keyUpHandler(e){
    if(e.key == "RIght" || e.key == "ArrowRight"){
        rightPressed = false
    }else if(e.key == "left" || e.key == "ArrowLeft"){
        leftPressed = false
    }
}
document.addEventListener("mousemove", mouseMoveHandler, false )
var interval = setInterval(draw, 10)

var brickRowCount = 8
var brickColumnCount = 15
var brickWidth = 75
var brickHeight = 30
var brickPadding = 20
var brickOffsetTop = 30
var brickOffsetLeft = 30
var bricks = [] 

for(var c=0; c<brickColumnCount; c++){
    bricks[c] = []
    for(var r=0; r<brickRowCount; r++){
        bricks[c] [r] = {x:0 , y:0, status:1}
    }
}

function drawBricks(){
    for(var c=0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            if(bricks[c][r].status ==1){
    var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft
    var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop
            bricks [c][r].x = brickX
            bricks [c][r].y = brickY
            ctx.beginPath()
            ctx.rect(brickX, brickY, brickWidth, brickHeight)
            ctx.fillStyle = "#8C3A3A"
            ctx.fill()
            ctx.closePath()
            }
        }
    }

}

function collisionDetection(){
    for(var c=0; c<brickColumnCount; c++){
        for(var r=0; r<brickRowCount; r++){
            var b = bricks[c][r];
            if(b.status === 1){
            if(x > b.x && x < b.x+brickWidth && y>b.y && y<b.y+brickHeight){
                dy = -dy;
                b.status = 0;
                score++;
                if(score == brickRowCount*brickColumnCount){
                    alert("you dont loose")
                    document.location.reload()
                    clearInterval(interval);
                    }
                }
            }
        }

    }
}

var score = 0

function drawScore(){
    ctx.font = "16px arial"
    ctx.fillStyle = "#BF800B"
    ctx.fillText("Score: "+score, 8, 80)
}

if(rightPressed && paddleX < canvas.width-paddleWidth){
    paddleX += 7;
}else if(leftPressed && paddleX > 0){
    paddleX += 7;
}
function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}