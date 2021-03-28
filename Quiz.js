    class Quiz {
    constructor(){}
      
    getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
    }
    
    update(state){
    database.ref('/').update({
    gameState: state
    });
    } 
    
    async start(){ 
    if(gameState === 0){
    contestant = new Contestant();
    var contestantCountRef=await database.ref("contestantCount").once("value");
    if(contestantCountRef.exists()){
    contestantCount=contestantCountRef.val();
    contestant.getCount();
    }

    question = new Question();
    question.display();
    }
    }

    play(){
    question.hide();
    background("yellow");

    fill(0)
    textSize(30);
    text("Result Of The Quiz",320,45);

    Contestant.getPlayerInfo();
    if(contestants !== undefined){
    var display_Answers=245;
    fill("blue");
    textSize(20);
    text("Note:Contestant who answered correct is highlighted in purple colour",120,210);

    for(var plr in contestants){
    var correctAns="1";

    if(correctAns === contestants[plr].answer)
    fill("purple");
    else
    fill("red");

    display_Answers+=30;
    textSize(15);
    text(contestants[plr].name + ":" + contestants[plr].answer,210,display_Answers);
    }
    }
    }
    };