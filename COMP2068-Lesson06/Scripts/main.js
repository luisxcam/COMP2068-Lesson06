var stage;

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);
}

function handleTick() {
    stage.update();
}


