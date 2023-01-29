var playerStyle = {
    left: 450,
    top: 625
}

var playerStyleTop = 625, playerStyleLeft = 450;

var enemiesStyleTop = 100, enemiesStyleLeft;

var enemiesStyle = [50, 150, 250, 350, 450, 550, 650, 750]

var players = document.querySelector(".players");
var enemies = document.querySelector(".enemies");
var playerItem = document.getElementsByClassName("player");

drawPlayer();
drawEnemies();

function drawPlayer() {
    var player = document.createElement("div");
    player.setAttribute("class", "player");
    player.style.left = playerStyleLeft;
    player.style.top = playerStyleTop;

    players.appendChild(player);
}

function drawEnemies() {
    enemies.style.top = "100px";
    enemiesStyleTop = enemies.style.top.replace("px", "")

    for (var i = 0; i < enemiesStyle.length; i++) {
        var battle = document.createElement("div");
        battle.setAttribute("class", "enemy");
        battle.style.left = enemiesStyle[i] + "px";
        battle.style.top = enemies.style.top;
        enemies.appendChild(battle);
    }
}

var arr = document.querySelectorAll(".enemy");
var i = 36;

function step() {

    for (j = 0; j < arr.length; j++) {
        enemiesStyleTop = (i) + "px";
        arr[j].style.top = enemiesStyleTop;
        console.log(enemiesStyleTop);
    }
    i = i + 10;
    if (i <= 638) {
        setTimeout(step, 3000);
    }

}

step();

function update() {
    playerItem[0].style.left = playerStyleLeft;
    playerItem[0].style.top = playerStyleTop;
    playerStyle.left = playerItem[0].style.left.replace("px", "");
}

document.onkeydown = function (e) {
    if (e.keyCode = 37) { // LEFT
        playerStyleLeft = (parseInt(playerStyle.left) - 10) + "px";
    }
    if (e.keyCode == 39) { // RIGHT
        playerStyleLeft = (parseInt(playerStyle.left) + 10) + "px";
    }
    update();

}