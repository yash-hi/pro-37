      class Question {
      constructor() {

      this.title=createElement("h1");
      this.input1=createInput("Name");
      this.input2=createInput("Correct Option");
      this.button=createButton("Submit");
      this.question=createElement("h3");
      this.option1=createElement("h4");
      this.option2=createElement("h4");
      this.option3=createElement("h4");
      this.option4=createElement("h4");
      }
   
      hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      }
 
      display(){
      this.title.html("MY QUIZ GAME");
      this.title.position(340, 1);
     
      this.question.html("Question:Which Country Has White Pigeons ?");
      this.question.position(140,70);
      this.option1.html("1:Netherland");
      this.option1.position(140,90);
      this.option2.html("2:USA");
      this.option2.position(140,110);
      this.option3.html("3:India");
      this.option3.position(140,130);
      this.option4.html("4:Australia");
      this.option4.position(140,150);

      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);

      this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name=this.input1.value();
      contestant.answer=this.input2.value();
      contestantCount+=1;
      contestant.index=contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

      var title = createElement('h1');
      title.html("Hello " + contestant.name);
      title.position(100,0);
      });
      }
      };
 