'use strict'
var score ;
var myplace = 'yes';
function q1(){
var pplace = prompt('do you think I live in Amman?');
if ( pplace.toLowerCase() === myplace ){
    alert('hmmm try the next one then');
    score = 0 ;
} else {
    alert('Braaaaavooo , yes I live in Ajloun');
    score = 1 ;
}
}
q1();
var myage = 'yes';
function q2(){
var page = prompt('do I seem more than 18?');
if (page.toLowerCase() === myage ){
    alert('absoluteley correct');
    score = score + 1 ;
}else {alert('hmm then how do you think could I have the schoolarship of coding???');}
}
q2();

var mynationality = 'yes';
function q3(){
var pnationality = prompt('do you think I am Jordanian?');
if (pnationality.toLowerCase() === mynationality ){
    alert('correct !!');
    score = score + 1 ;
}else {alert('wow , it seems you still do not know me, I am Jordanian, dude ');}}
var myfavcolor = 'yes';

function q5(){
var pcolor = prompt('do you think I prefer Yellow color');
if (pcolor.toLowerCase() === myfavcolor ) {alert('true , it is the color of the season');
score = score + 1 ;
    
} else {alert('to be honest, I love all colors but Yellow color is the best');}
}

q5();
q3();
var myfeild = 'yes';
function q4(){
var pfeild = prompt('am I doctor');
if (pfeild.toLowerCase() === myfeild) {alert('well, that was my dad wanted me to be , but not me');
    
} else {alert('that is true ... actually i had never seen a doctor who is learning programming');
score = score + 1 ;
    
}}
q4();

// console.log('I live in Ajloun and I am 23, I am Jordanian my favourite color is Yellow and I finished my degree in engineering');
alert('I live in Ajloun and I am 23, I am Jordanian my favourite color is Yellow and I finished my degree in engineering');
alert('now it is your turn!');
var username = prompt('what about you name, dear ?');
document.write(' dear '+ username + ' you are more than welcome to my web site');
alert(username + ' have a nice day ');

//  {[[]] lab 3 ; extend my "about me" project[[]]}

//var score = 0 ;
var psleep ;
function q6(){
for (let i = 4; i > 0 ; i--) {
    psleep = prompt('how many hours do you think I spend in sleeping? you have '+i+" trys");
    while(psleep == "" || psleep == undefined){
        psleep = prompt('how many hours do you think I spend in sleeping? you have '+i+" trys");
    }
    psleep = parseInt(psleep);
    if (psleep === 8 ){
        alert('graet job!');
        score = score + 1 ;
        break;
    }else if (psleep < 8){
        alert('too low');
    }else {
        alert('too high');
    }
}
alert('well, I sleep 8 hours a day');

}
q6();

var array1 = [12,3,4];
var pmonth ;
var check = 0;


function q7(){
    for (var c = 6 ; c > 0  ; c--){
        pmonth = prompt('there are 5 months in the year which I prefer more than the others, could you guess any of them? and plz type them as numbers you have '+ c +' trys');
        pmonth = parseInt(pmonth);
        for(var i = 0; i<array1.length ; i++){
            if (pmonth == array1[i] ){
                alert('wow you seem good in guessing');
                score = score + 1 ;
                check = 1;
                break;
            }
        }
        if (check == 1){
            break;
        }else{
            alert('haah nop!');
        }
        
    }
}
q7();
  
alert('December, March and April are my top favourites');
   
alert(' your score out of 7 is ' + score );






