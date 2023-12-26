var isplaying = false;
var stage = 0;
const combo = [];
var playerStage = 0;

$(document).keypress(function(){
    if(isplaying === false){
        isplaying = true;
        start();
    }
});

$("div.btn").click(function(){
    if (isplaying){
        animButton($(this));
        var objId = $(this).attr("id");
        switch (objId){
            case "green":
                ans = 1;
                break;
            case "red":
                ans = 2;
                break;
            case "yellow":
                ans = 3;
                break;
            case "blue":
                ans = 4;
                break;
        }

        if(ans === combo[playerStage]){
            if(playerStage >= stage){
                setTimeout(function() {
                    stage += 1;
                    hint();
                }, 500);
            }
            playerStage += 1;
        }else{
            $("#level-title").text("Press Any Key to Start");
            isplaying = false;
        }
    }

});

function start(){
    stage = 0;
    playerStage = 0;
    combo.splice(0,combo.length);

    hint();
}

function hint(){
    playerStage = 0;
    
    $("#level-title").text("Level : " + (stage + 1));
    
    //random button
    var ran = Math.round(Math.random() * 3)+ 1

    console.log("ran button : "  + ran);

    combo.push(ran);
    console.log("combo array : "+ combo);

    switch(ran){
        case 1:
            animButton($("div.green"));
            break;
        case 2:
            animButton($("div.red"));
            break;
        case 3:
            animButton($("div.yellow"));
            break;
        case 4:
            animButton($("div.blue"));
            break;
    }
}

function animButton(obj){
    var objid = obj.attr('id');
    var audio = new Audio("./sounds/"+objid+".mp3");
    audio.play();

    obj.addClass("pressed");
    setTimeout(function() {
        obj.removeClass("pressed");
    }, 100);
}



