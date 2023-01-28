var playerStyle = {
    left: 450,
    top: 820
}

var playerStyleTop = 820, playerStyleLeft = 450;

var enemiesStyle = [
    { left: 450, top: 200 }, 
    { left: 350, top: 250 }
]

var players = document.querySelector(".players");
var enemies = document.querySelector(".enemies");
var playerItem = document.getElementsByClassName("player");

function drawPlayer () {
    // content = "<div class='player' style='left:" + player.left + "px; top: " + player.top + "px" + "></div>";

    var player = document.createElement("div");
    player.setAttribute("class", "player");
    player.style.left = playerStyle.left;
    player.style.top = playerStyle.top;
    console.log(playerStyle.top);

    players.appendChild(player);
}

function drawEnemies() {
    content = "";
    for (var i = 0; i < enemies.length; i++) {
        // content += "<div class='enemy' style='left:" + player.left + "px; top: " + player.top + "px'></div>";

        var enemy = document.createElement("div");
        enemy.setAttribute("class", "enemy");
        enemy.style.left = enemiesStyle[i].left;
        enemy.style.top = enemiesStyle[i].top;
        enemies.appendChild(enemy);

    }

    console.log(enemies)

}

function update() {
    playerItem[0].style.left = playerStyleLeft;
    playerItem[0].style.top = playerStyleTop;
    playerStyle.left = playerItem[0].style.left.replace("px", "");
}

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keyCode = 37) { // LEFT
        playerStyleLeft = (parseInt(playerStyle.left) - 10) + "px";
    }
    if(e.keyCode == 39) { // RIGHT
        console.log("right key");
        playerStyleLeft = (parseInt(playerStyle.left) + 10) + "px";
    }
    update();
    console.log(playerStyle.left);
    console.log(playerItem[0].style.left)
}

drawPlayer();
drawEnemies();

console.log(document.getElementsByClassName("ocean"))