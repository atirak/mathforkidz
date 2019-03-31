"use strict";   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
var correct = new Audio('sound/Good-idea-bell.mp3');
var incorrect = new Audio('sound/Error-sound-effect.mp3');
var Counter = {
    PlayingState: null,
    IsStoped: true,
    Score: 0,
    TimeRemaining: 0,
    FirstNumber: 0,
    SecondNumber: 0,
    CorrectAnswer: 0,
    CorrectPosition: 0,
    WrongAnswer: 0,
    quiz: 0,
    round:0,
    Star: function(selector)
    {
        if(this.Score>=3/3*this.round){
            document.getElementById(selector).src = 'timeup/star3.png';
        }if(this.Score<=2/3*this.round){
            document.getElementById(selector).src = 'timeup/star2.png';
        }if(this.Score<=1/3*this.round){
            document.getElementById(selector).src = 'timeup/star.png';
        }
        
    },
    AddContentToElement: function(selector, content)
    {
        document.querySelector(selector).innerHTML = content;
    },
    ChangeStyle: function(selector, property, value)
    {
        document.querySelector(selector).setAttribute(property, value);
    },
    Initialize: function(timeRemaining)
    {
        this.TimeRemaining = timeRemaining;
    },
    GenerateRandomNumber: function(multiplier)
    {
        return Math.round( Math.random() * multiplier ) + 1;
    },
    Refresh: function(selector, data)
    {
        document.querySelector(selector).innerText = (data < 10 ? "0" : "") + data;
    },
    LoopThroughElements: function()
    {
        var answers = [this.CorrectAnswer];

        for (var index = 1; index < 5; index++)
        {
            this.ChangeStyle("ul#choices > li:nth-of-type(" + index + ")", "style", "height:auto;");

            if (index !== this.CorrectPosition)
            {
                do
                {
                    if(this.quiz==5){
                        this.WrongAnswer = (this.GenerateRandomNumber(9)+(this.GenerateRandomNumber(9)/10)) + (this.GenerateRandomNumber(9)+(this.GenerateRandomNumber(9)/10));
                        this.WrongAnswer = (this.WrongAnswer).toFixed(2)
                    }else{
                        this.WrongAnswer = this.GenerateRandomNumber(9) + this.GenerateRandomNumber(9);
                    }
                    
                } while ( answers.indexOf(this.WrongAnswer) > -1 );

                this.AddContentToElement( "ul#choices > li:nth-of-type(" + index + ")", this.WrongAnswer);
                answers.push(this.WrongAnswer);
            }
        }
    },
    Launch: function(n)
    {
        this.IsStoped = false;
        this.Action();
        this.ChangeStyle("aside#time-remaining", "style", "visibility:visible;");
        this.ChangeStyle("#game-over", "style", "display:none;");
        this.ChangeStyle("ul#choices", "style", "pointer-events:initial; opacity:1;");
        this.ChangeStyle("button#start-reset", "style", "visibility:hidden;");
        this.AddContentToElement("button#start-reset", "Reset Game");
        this.Refresh("aside#time-remaining > span", this.TimeRemaining);
        this.quiz = n;
        if(this.quiz==1){
            this.GenerateQuestionAndAnswers1();
        }if(this.quiz==2){
            this.GenerateQuestionAndAnswers2();
        } if(this.quiz==3){
            this.GenerateQuestionAndAnswers3();
        } if(this.quiz==5){
            this.GenerateQuestionAndAnswers5();
        }
    },
    GenerateQuestionAndAnswers1: function()
    {
        this.FirstNumber = this.GenerateRandomNumber(9);
        this.SecondNumber = this.GenerateRandomNumber(9);
        this.CorrectAnswer = this.FirstNumber + this.SecondNumber;
        this.CorrectPosition = this.GenerateRandomNumber(3);
        this.ChangeStyle("section#question", "style", "height:auto;");
        this.AddContentToElement("section#question", this.FirstNumber + "+" + this.SecondNumber);
        this.AddContentToElement( "ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.CorrectAnswer );
        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers2: function()
    {
        this.FirstNumber = this.GenerateRandomNumber(9);
        this.SecondNumber = this.GenerateRandomNumber(9);
        
        
        if(this.GenerateRandomNumber(1)==1){
            this.CorrectAnswer = this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "+?=" + (this.FirstNumber + this.SecondNumber));
            
        }else{
            this.CorrectAnswer = this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "-?=" + (this.FirstNumber - this.SecondNumber));
        }
        this.CorrectPosition = this.GenerateRandomNumber(3);
        this.ChangeStyle("section#question", "style", "height:auto;");

        this.AddContentToElement( "ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.SecondNumber );
        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers3: function()
    {
        this.FirstNumber = this.GenerateRandomNumber(9);
        this.SecondNumber = this.GenerateRandomNumber(9);
        this.ran = this.GenerateRandomNumber(2);
      
        if(this.ran==0){
            this.CorrectAnswer = this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "+?=" + (this.FirstNumber + this.SecondNumber));
         }if(this.ran==1){
            this.CorrectAnswer = this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "-?=" + (this.FirstNumber - this.SecondNumber));
        }if(this.ran==2){
            this.CorrectAnswer = this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "×?=" + (this.FirstNumber * this.SecondNumber));
        }
        this.CorrectPosition = this.GenerateRandomNumber(3);
        this.ChangeStyle("section#question", "style", "height:auto;");

        this.AddContentToElement( "ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.SecondNumber );
        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers5: function()
    {
        this.FirstNumber = this.GenerateRandomNumber(9)+(this.GenerateRandomNumber(9)/10);
        this.SecondNumber = this.GenerateRandomNumber(9)+(this.GenerateRandomNumber(9)/10);
        this.ran = this.GenerateRandomNumber(2);
      
        if(this.ran==0){
            this.CorrectAnswer = this.FirstNumber + this.SecondNumber ;
            this.AddContentToElement("section#question", this.FirstNumber + "+" + this.SecondNumber);
         }if(this.ran==1){
            this.CorrectAnswer = this.FirstNumber - this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "-" + this.SecondNumber);
        }if(this.ran==2){
            this.CorrectAnswer = this.FirstNumber * this.SecondNumber;
            this.AddContentToElement("section#question", this.FirstNumber + "×" + this.SecondNumber);
        }
        this.CorrectPosition = this.GenerateRandomNumber(3);
        this.ChangeStyle("section#question", "style", "height:auto;");
        this.CorrectAnswer = (this.CorrectAnswer).toFixed(2);
        this.AddContentToElement( "ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.CorrectAnswer);
        this.LoopThroughElements();

    
    },
    Action: function()
    {
        Counter.PlayingState = setInterval( function()
        {
            Counter.TimeRemaining--;
            if (Counter.TimeRemaining <= 30)
            {
                Counter.ChangeStyle("button#start-reset", "style", "visibility:visible;");
            }

       
            if (Counter.TimeRemaining < 1)
            {
                Counter.Stop();
            }
            else
            {
                Counter.Refresh("aside#time-remaining > span", Counter.TimeRemaining);
            }
        }, 1000 );
    },
    EventListener: function(event)
    {
        if ( Number(event.currentTarget.innerText) === Number(Counter.CorrectAnswer) )
        {
            Counter.round++;
            Counter.Score++;
            correct.play();
            Counter.Refresh("aside#score > span", Counter.Score);
            if(Counter.quiz==1){
                Counter.GenerateQuestionAndAnswers1();
            }else if(Counter.quiz==2){
                Counter.GenerateQuestionAndAnswers2();
            }else if(Counter.quiz==3){
                Counter.GenerateQuestionAndAnswers3();
            }else{
                Counter.GenerateQuestionAndAnswers5();
            }
            Counter.ChangeStyle("p#message", "style", "visibility:visible; background-color:#23A230;");
            Counter.AddContentToElement("p#message", "Correct");
        }
        else
        {
            incorrect.play();
            if (Counter.Score >= 1)
            {
                Counter.Score -= 0.5;
                Counter.Refresh("aside#score > span", Counter.Score);
            }
            
            Counter.ChangeStyle("p#message", "style", "visibility:visible; background-color:#DE401A;");
            Counter.AddContentToElement("p#message", "Try again");
        }

        setTimeout( function()
        {
            Counter.ChangeStyle("p#message", "style", "visibility:hidden;");
        }, 1000 );
    },
    CheckClickOnRightAnswer: function()
    {
        for (var index = 1; index < 5; index++)
        {
            document.querySelector("ul#choices > li:nth-of-type(" + index + ")").removeEventListener("click", this.EventListener, false);
            document.querySelector("ul#choices > li:nth-of-type(" + index + ")").addEventListener("click", this.EventListener);
        }
    },
    Stop: function()
    {
        this.IsStoped = true;
        clearInterval(this.PlayingState);
        this.ChangeStyle("ul#choices", "style", "pointer-events:none; opacity:0.4;");
        this.ChangeStyle("aside#time-remaining", "style", "visibility:hidden;");
        this.ChangeStyle("div#game-over", "style", "display:block;");
        this.AddContentToElement("button#start-reset", "Start Game");
        this.AddContentToElement( "div#game-over > p:last-of-type > span", (this.Score !== "00" && this.Score < 10 ? "0" : "") + this.Score );
        this.Star("star");
        this.AddContentToElement("aside#score > span", this.Score = "00");
    }
};


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById("start-reset").addEventListener("click", function()
    {
        var level = document.getElementById("start-reset").value;
        if (level == 1 || level == 4) {
            Counter.Initialize(60);
        } else if (level == 2 || level == 5) {
            Counter.Initialize(50);
        } else {
            Counter.Initialize(40);
        }
              
        Counter.IsStoped ? Counter.Launch(level) : Counter.Stop();       
        Counter.CheckClickOnRightAnswer();        
    });
    
});
