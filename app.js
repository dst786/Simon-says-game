let gameseq = [];
let userseq = [];
let btns =['yellow','red','purple','green'];
let started = false;
let level = 0;
const h2 = document.querySelector('h2');


document.addEventListener("keydown",function(){
    if(started == false){
        console.log("game started")
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}
function userflash(btn){
        btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)

}
function levelUp(){
    userseq =[];
    level++;
    h2.innerText =`Level ${level}`
    let randIdx= Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}
function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp(),1000);
        }
        else{
            
        }
    }
    else{
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },300)
        h2.innerHTML = `Game over your score: <b>${level}</b> <br>press any key to start.`;
        reset();
    }
}

function btnpres(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpres);
}

function reset(){
    started = false;
    gameseq=[];
    userseq = [];
    level=0;
}