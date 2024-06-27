window.addEventListener('load',events);
var btns =document.getElementsByTagName('button');
function events(){
//console.log(btns);
for(var i=0;i<btns.length;i++){
    var currentbutton = btns[i];
    currentbutton.addEventListener('click',show);
}
}

var  winCondition =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



var countdown =5;
var interval;

function countdowntime(){
    interval=setInterval(function(){
        countdown--;
        document.body.innerHTML=`<h1> Player ${winner} win. New Game Start in ${countdown} seconds.</h1>`;
    },1000)
}

function settime(){
    countdowntime();
    setTimeout(
        function(){
            reset();
        }, 5000);
}


/*
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
    
function reset(){
    //sleep(5000).then(() => {location.reload();});
}
*/

function reset(){  
    clearInterval(interval);
    countdown=5;
    location.reload();
}
var winner;
function isgameover(){
    for(var j=0;j<winCondition.length;j++){
        if(btns[winCondition[j][0]].innerText.trim()!=''){
            if(btns[winCondition[j][0]].innerText.trim()==btns[winCondition[j][1]].innerText.trim() && btns[winCondition[j][0]].innerText.trim()==btns[winCondition[j][2]].innerText.trim()){
                winner=btns[winCondition[j][0]].innerText.trim();
                document.body.innerHTML=`<h1> Player ${winner} win. New Game Start in ${countdown} seconds.</h1>`;
                settime();
                //reset();
            }
        }
    }[]
}

var count = 0;
var flag=true;
function show(){
    if(this.innerText.trim().length==0){
        var btnvalue = flag?'X':'0';
        this.innerText =btnvalue;
        flag=!flag;
        count++
       if(count >=5){
        isgameover();
        }
        
    }
}



