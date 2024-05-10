let scoreElement=document.getElementById('scoreid')
let arrowElement=document.getElementById('arrowid')

let score=0;

let arrows=[
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Arrow_left.svg/1280px-Arrow_left.svg.png',
    'https://cdn-icons-png.flaticon.com/512/2/2231.png',
    'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Arrow_right.svg/1280px-Arrow_right.svg.png',
    'https://clipart-library.com/img1/1236729.png',
]
// 0-left
// 1-up
// 2-right
// 3-down


let picked=0;

setInterval(pickimage,3000)

function pickimage(){
picked=RandomArbitrary(0,3)
arrowElement.setAttribute('src',arrows[picked])
}
function RandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
addEventListener('keydown',checkey)

function checkey(info){
    let usrpicked=0;
    if(info.key=='ArrowLeft'){
        usrpicked=0;
    }
    else if(info.key=='ArrowUp'){
        usrpicked=1;
    }
    else if(info.key=='ArrowRight'){
        usrpicked=2;
    }else if(info.key=='ArrowDown'){
        usrpicked=3;
    }else{
        return
    }

if(usrpicked==picked){
    updateScore(score+1)
}else{
    updateScore(0)
    alert('game over')
}
}

function updateScore(newScore){
    score=newScore;
    scoreElement.innerHTML=`Score ` + score
}