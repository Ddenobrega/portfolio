function play(){
    var playButton = document.getElementById("play-text");
    playButton.innerHTML = "<span id='score'> Score =  <span id='score-num'> 0 </span>   Time = <span id='time-num'> 9999 </span></span>";
    clickedMe()
}

function clickedMe(){
    var i = 0;
    var easyTime = 10;
    var player = document.getElementById("player")
    var scoreboard = document.getElementById("score-num")
    var timeboard = document.getElementById("time-num")
    player.addEventListener("click", scoreHandler)
    function timeHandler(){
        setInterval(() => {
            easyTime -= 1
            timeboard.innerHTML = easyTime;
            if(easyTime == 0){
                alert("game over, your score is: " + i)
                location.reload();
                return 0;
            }


        }, 1000);

    }
    function scoreHandler(){
        i += 1
        scoreboard.innerHTML = i;
        if(easyTime < 5){
            easyTime = easyTime + 2;
        }   
        var xAxis = randomMove(0, 65);
        var yAxis = randomMove(0, 550);
        console.log("x: " + xAxis)
        console.log("y: "  + yAxis)
        player.style.marginLeft = xAxis + "%"
        player.style.marginTop = yAxis + "px"
    }
    function randomMove(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 

    }

    timeHandler()
}


