"use strict";   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
var correct = new Audio('sound/Good-idea-bell.mp3');
var incorrect = new Audio('sound/Error-sound-effect.mp3');
var elemFraction = ['q2/q1.1.png', 'q2/q1.2.png', 'q2/q1.3.png', 'q2/q1.4.png', 'q2/q1.5.png', 'q2/q1.6.png', 'q2/q1.7.png', 'q2/q1.8.png', 'q2/q1.9.png', 'q2/q1.10.png'];
var ansFraction = ['2/4', '1/2', '3/4', '3/5', '3/8', '4/8', '1/3', '7/8', '4/5', '2/3'];
var elemClock = ['QTgame2/time1.png', 'QTgame2/time2.png', 'QTgame2/time3.png', 'QTgame2/time4.png', 'QTgame2/time5.png', 'QTgame2/time6.png', 'QTgame2/time7.png', 'QTgame2/time8.png', 'QTgame2/time9.png', 'QTgame2/time10.png', 'QTgame2/time11.png', 'QTgame2/time12.png', 'QTgame2/time13.png', 'QTgame2/time14.png', 'QTgame2/time15.png', 'QTgame2/time16.png', 'QTgame2/time17.png', 'QTgame2/time18.png', 'QTgame2/time19.png', 'QTgame2/time20.png', 'QTgame2/time21.png', 'QTgame2/time22.png', 'QTgame2/time23.png', 'QTgame2/time24.png', 'QTgame2/time25.png', 'QTgame2/time26.png', 'QTgame2/time27.png', 'QTgame2/time28.png', 'QTgame2/time29.png', 'QTgame2/time30.png', 'QTgame2/time31.png'];
var ansClock = ['10:30', '04:30', '04:30', '10:55', '07:50', '12:30', '04:23', '07:10', '03:40', '10:10', '03:10', '12:00', '06:15', '05:15', '10:15', '11:15', '08:15', '12:00', '09:00', '10:30', '04:30', '04:55', '03:05', '08:05', '08:40', '03:00', '06:00', '07:00', '11:55', '09:55', '12:00'];
var elem3D = ['q3/q3.1-1.png', 'q3/q3.2-1.png', 'q3/q3.3-1.png', 'q3/q3.4-1.png', 'q3/q3.5-1.png', 'q3/q3.6-1.png', 'q3/q3.7-1.png', 'q3/q3.8-1.png', 'q3/q3.9-1.png', 'q3/q3.10-1.png'];
var ans3D = ['q3/q3.1-0.png', 'q3/q3.2-0.png', 'q3/q3.3-0.png', 'q3/q3.4-0.png', 'q3/q3.5-0.png', 'q3/q3.6-0.png', 'q3/q3.7-0.png', 'q3/q3.8-0.png', 'q3/q3.9-0.png', 'q3/q3.10-0.png'];
var elemArea = ['รูปสี่เหลี่ยมผืนผ้ามีด้านกว้าง 4 นิ้ว ด้านยาว 5 นิ้ว มีพื้นที่เท่าไร', 'รูปสี่เหลี่ยมผืนผ้ามีด้านกว้าง 4 เซนติเมตร ด้านยาว 7 เซนติเมตร มีพื้นที่เท่าไร', 'แผ่นกระดาษมีพื้นที่ 886 ตารางเซนติเมตร ตัดเป็นรูปสี่เหลี่ยมเล็กกว้าง 4 เซนติเมตร ยาว 8 เซนติเมตร ขนาดเท่ากันให้ได้มากที่สุด จะเหลือพื้นที่กระดาษเท่าไร', 'ผนังห้องห้องหนึ่ง มีพื้นที่ 15 ตารางเมตร ติดภาพวาดซึ่งมีขนาดกว้าง 1 เมตร ยาว 3 เมตร จะมีพื้นที่ฝาผนังเหลือเท่าไร', 'กระเบื้องรูปสี่เหลี่ยมจัตุรัส 1 แผ่น มีพื้นที่ 625 ตารางเซนติเมตร กระเบื้องแผ่นนี้จะมีด้านแต่ละด้านยาวเท่าไร', 'สนามแห่งหนึ่งเป็นรูปสี่เหลี่ยมผืนผ้า มีพื้นที่ 252 ตารางเมตร มีด้านยาว 18 เมตร ด้านกว้างจะกว้างเท่าไร', 'มีพื้นที่เหลือจากการปลูกบ้าน 12 ตารางเมตร ต้องการทำเป็นสนามหญ้า ซื้อหญ้าขนาด 30 ตารางเซนติเมตร มาปลูกจะต้องใช้หญ้ากี่แผ่น'];
var ansArea = ['20 ตร.ซม.', '28 ตร.ม.', '22 ตร.ซม.', '12 ตร.ม.', '25 ซ.ม.', '14 ม.', '4000 แผ่น'];
var elemShape = ['shape/circle1.png', 'shape/Oval.png', 'shape/rectangle.png', 'shape/square2.png', 'shape/triangle.png'];
var ansShape = ['วงกลม', 'วงรี', 'สี่เหลี่ยมพืนผ้า', 'สี่เหลี่ยมจัตุรัต', 'สามเหลี่ยม'];

var Counter = {

    PlayingState: null,
    IsStoped: true,
    Score: 0,
    TimeRemaining: 0,
    Number: 0,
    CorrectAnswer: "",
    CorrectPosition: 0,
    WrongAnswer: "",
    quiz: 0,
    Length: 0,
    imgValue: 0,
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
    AddImgToElement: function (selector, content) {

        document.getElementById(selector).src = content;
    },
    AddContentToElement: function (selector, content) {
        document.querySelector(selector).innerHTML = content;
    },

    ChangeStyle: function (selector, property, value) {
        document.querySelector(selector).setAttribute(property, value);
    },
    Initialize: function (timeRemaining) {
        this.TimeRemaining = timeRemaining;
    },
    GenerateRandomNumber: function (multiplier) {
        return Math.round(Math.random() * multiplier);
    },
    Refresh: function (selector, data) {
        document.querySelector(selector).innerText = (data < 10 ? "0" : "") + data;
    },
    LoopThroughElements: function () {
        var answers = [this.CorrectAnswer];

        for (var index = 1; index < 5; index++) {
            this.ChangeStyle("ul#choices > li:nth-of-type(" + index + ")", "style", "height:auto;");

            if (index !== this.CorrectPosition) {
                do {
                    var ran = this.GenerateRandomNumber(this.Length - 1)
                    if (this.quiz == 1) {
                        this.WrongAnswer = ansShape[ran];
                    } if (this.quiz == 2) {
                        this.WrongAnswer = ansClock[ran];
                    } if (this.quiz == 3) {
                        this.WrongAnswer = ansArea[ran];
                    } if (this.quiz == 4) {
                        this.WrongAnswer = ansFraction[ran];
                    } if (this.quiz == 6) {
                        this.WrongAnswer = ans3D[ran];
                    }
                } while (answers.indexOf(this.WrongAnswer) > -1);
                if (this.quiz != 6) {
                    this.AddContentToElement("ul#choices > li:nth-of-type(" + index + ")", this.WrongAnswer);
                } else {
                    this.AddImgToElement("x" + index, this.WrongAnswer);
                    this.ChangeStyle("img#x" + index, "style", "visibility:visible;");

                }

                answers.push(this.WrongAnswer);
            }
        }
    },
    Launch: function (n) {
        this.quiz = n;
        this.IsStoped = false;
        this.Action();
        if (this.quiz != 3) {
            this.ChangeStyle("img#x", "style", "visibility:visible;");
        }
        this.ChangeStyle("aside#time-remaining", "style", "visibility:visible;");
        this.ChangeStyle("#game-over", "style", "display:none;");
        this.ChangeStyle("ul#choices", "style", "pointer-events:initial; opacity:1;");
        this.ChangeStyle("button#start-reset", "style", "visibility:hidden;");
        this.AddContentToElement("button#start-reset", "Reset Game");

        this.Refresh("aside#time-remaining > span", this.TimeRemaining);
        
        if (this.quiz == 1) {
            this.GenerateQuestionAndAnswers1_1();
        } if (this.quiz == 2) {
            this.GenerateQuestionAndAnswers2_1();
        } if (this.quiz == 3) {
            this.GenerateQuestionAndAnswers3_1();
        } if (this.quiz == 4) {
            this.GenerateQuestionAndAnswers1_2();
        } if (this.quiz == 5) {
            this.GenerateQuestionAndAnswers2_2();
        } if (this.quiz == 6) {
            this.GenerateQuestionAndAnswers3_2();
        }
    },
    GenerateQuestionAndAnswers1_1: function () {
        this.Length = elemShape.length;

        this.Number = this.GenerateRandomNumber(this.Length - 1);
        this.CorrectAnswer = ansShape[this.Number];
        var src = elemShape[this.Number];

        this.CorrectPosition = this.GenerateRandomNumber(3) + 1;
        this.ChangeStyle("section#question", "style", "height:auto;");
        this.AddImgToElement("x", src);
        this.AddContentToElement("ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.CorrectAnswer);
        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers1_2: function () {
        this.Length = elemFraction.length;

        this.Number = this.GenerateRandomNumber(this.Length - 1);
        this.CorrectAnswer = ansFraction[this.Number];
        var src = elemFraction[this.Number];

        this.CorrectPosition = this.GenerateRandomNumber(3) + 1;
        this.ChangeStyle("section#question", "style", "height:auto;");
        this.AddImgToElement("x", src);
        this.AddContentToElement("ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.CorrectAnswer);
        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers2_1: function () {
        this.Length = elemClock.length;

        this.Number = this.GenerateRandomNumber(this.Length - 1);
        this.CorrectAnswer = ansClock[this.Number];


        var src = elemClock[this.Number];

        this.CorrectPosition = this.GenerateRandomNumber(3) + 1;
        this.ChangeStyle("section#question", "style", "height:auto;");
        this.AddImgToElement("x", src);
        this.AddContentToElement("ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.CorrectAnswer);

        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers3_1: function () {
        this.Length = elemArea.length;

        this.Number = this.GenerateRandomNumber(this.Length - 1);
        this.CorrectAnswer = ansArea[this.Number];
        var src = elemArea[this.Number];

        this.CorrectPosition = this.GenerateRandomNumber(3) + 1;
        this.ChangeStyle("section#questionlong", "style", "height:auto;");
        this.AddContentToElement("section#questionlong", src);
        this.AddContentToElement("ul#choices > li:nth-of-type(" + this.CorrectPosition + ")", this.CorrectAnswer);
        this.LoopThroughElements();
    },
    GenerateQuestionAndAnswers3_2: function () {
        this.Length = elem3D.length;

        this.Number = this.GenerateRandomNumber(this.Length - 1);
        this.CorrectAnswer = ans3D[this.Number];
        var src = elem3D[this.Number];

        this.CorrectPosition = this.GenerateRandomNumber(3) + 1;
        this.ChangeStyle("section#question", "style", "height:auto;");
        this.AddImgToElement("x", src);
        this.AddImgToElement("x" + this.CorrectPosition, this.CorrectAnswer);
        this.ChangeStyle("img#x" + this.CorrectPosition, "style", "visibility:visible;");
        // this.imgValue = this.CorrectPosition;
        this.LoopThroughElements();
    },
    Action: function () {
        Counter.PlayingState = setInterval(function () {
            Counter.TimeRemaining--;
            if (Counter.TimeRemaining <= 30)
            {
                Counter.ChangeStyle("button#start-reset", "style", "visibility:visible;");
            }
            if (Counter.TimeRemaining < 1) {
                Counter.Stop();
            }
            else {
                Counter.Refresh("aside#time-remaining > span", Counter.TimeRemaining);
            }
        }, 1000);
    },
    EventListener: function (event) {

        if (Counter.quiz == 6) {
            if (event.currentTarget.value == Counter.CorrectPosition) {
                correct.play();
                Counter.Score++;
                Counter.Refresh("aside#score > span", Counter.Score);
                Counter.GenerateQuestionAndAnswers3_2();
                Counter.ChangeStyle("p#message", "style", "visibility:visible; background-color:#23A230;");
                Counter.AddContentToElement("p#message", "Correct");
            } else {
                incorrect.play();

                if (Counter.Score >= 1) {
                    Counter.Score -= 0.5;
                    Counter.Refresh("aside#score > span", Counter.Score);
                }

                Counter.ChangeStyle("p#message", "style", "visibility:visible; background-color:#DE401A;");
                Counter.AddContentToElement("p#message", "Try again");
            }
        } else if (event.currentTarget.innerText === Counter.CorrectAnswer) {
            correct.play();
            Counter.round++;
            Counter.Score++;
            Counter.Refresh("aside#score > span", Counter.Score);
            if (Counter.quiz == 1) {
                Counter.GenerateQuestionAndAnswers1_1();
            } else if (Counter.quiz == 2) {
                Counter.GenerateQuestionAndAnswers2_1();
            } else if (Counter.quiz == 3) {
                Counter.GenerateQuestionAndAnswers3_1();
            }else if (Counter.quiz == 4) {
                Counter.GenerateQuestionAndAnswers1_2();
            }
            Counter.ChangeStyle("p#message", "style", "visibility:visible; background-color:#23A230;");
            Counter.AddContentToElement("p#message", "Correct");
        }
        else {
            incorrect.play();

            if (Counter.Score >= 1) {
                Counter.Score -= 0.5;
                Counter.Refresh("aside#score > span", Counter.Score);
            }

            Counter.ChangeStyle("p#message", "style", "visibility:visible; background-color:#DE401A;");
            Counter.AddContentToElement("p#message", "Try again");
        }

        setTimeout(function () {
            Counter.ChangeStyle("p#message", "style", "visibility:hidden;");
        }, 1000);
    },
    CheckClickOnRightAnswer: function () {
        for (var index = 1; index < 5; index++) {
            document.querySelector("ul#choices > li:nth-of-type(" + index + ")").removeEventListener("click", this.EventListener, false);
            document.querySelector("ul#choices > li:nth-of-type(" + index + ")").addEventListener("click", this.EventListener);
        }
    },
    Stop: function () {
        this.IsStoped = true;
        clearInterval(this.PlayingState);
        this.ChangeStyle("ul#choices", "style", "pointer-events:none; opacity:0.4;");
        this.ChangeStyle("aside#time-remaining", "style", "visibility:hidden;");
        this.ChangeStyle("div#game-over", "style", "display:block;");
        this.AddContentToElement("button#start-reset", "Start Game");
        this.AddContentToElement("div#game-over > p:last-of-type > span", (this.Score !== "00" && this.Score < 10 ? "0" : "") + this.Score);
        this.Star("star");
        this.AddContentToElement("aside#score > span", this.Score = "00");
    }
};


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("start-reset").addEventListener("click", function () {
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
