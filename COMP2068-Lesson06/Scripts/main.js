var stage;
var myButton;

function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", handleTick);

    drawSlotMachine();
    drawMyButton();
}

function handleTick() {
    stage.update();
}

function drawSlotMachine() {
    var slotMachine = new createjs.Bitmap("img/slot_machine.png");
    slotMachine.x = 0;
    slotMachine.y = 0;

    myButton = new createjs.Bitmap("img/logo.gif");
    myButton.x = 100;
    myButton.y = 100;

    stage.addChild(slotMachine, myButton);

    myButton.addEventListener("click", clickHandler);
    myButton.addEventListener("mouseover", overHandler);
    myButton.addEventListener("mouseout", outHandler);
}

function clickHandler() {
    alert("you clicked me");
}

function overHandler() {
    myButton.alpha = 0.5;
}

function outHandler() {
    myButton.alpha = 1.0;
}


