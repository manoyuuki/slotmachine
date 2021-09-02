const nowTime1 = document.getElementById('nowTime1');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');

const setTime1 = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');
const startTimer = document.getElementById('startTimer');

let IntervalId1;
let IntervalId2;
let IntervalId3;
function startNumberdisplay1(){
    stopInterval1();
    IntervalId1 = setInterval('changeNumber1()', 500);
    console.log('start1');
}

function startNumberdisplay2(){
    stopInterval2();
    IntervalId2 = setInterval('changeNumber2()', 500);
    console.log('start2');
}

function startNumberdisplay3(){
    stopInterval3();
    IntervalId3 = setInterval('changeNumber3()', 500);
    console.log('start3');
}

function stopInterval1(){
    clearInterval(IntervalId1);
    console.log('stop1');
}

function stopInterval2() {
    clearInterval(IntervalId2);
    console.log('stop2');
}

function stopInterval3() {
    clearInterval(IntervalId3);
    console.log('stop3');
}

let i = 0;
let j = 0;
let k = 0;
function changeNumber1(){
    if (i >= 10){
        i = 0;
    }
    nowTime1.innerHTML = i;
    i++;
    console.log('change1');    
}

function changeNumber2() {
    if (j >= 10) {
        j = 0;
    }
    nowTime2.innerHTML = j;
    j++;
    console.log('change2');
}

function changeNumber3() {
    if (k >= 10) {
        k = 0;
    }
    nowTime3.innerHTML = k;
    k++;
    console.log('change3');
}

let stopJudgment1;
let stopJudgment2;
let stopJudgment3;

function stopJudgment(){
    if (stopJudgment1 && stopJudgment2 && stopJudgment3){
        if (i === 8 && j === 8 && k === 8) {
            // 最後に i, j, k がインクリメントされているから 7 でなく 8 になっている
            alert('大当たりです');
        } else if (i === j && j === k) {
            alert('おめでとう！');
        } else {
            alert('再挑戦');
        }
    } else {
        console.log('動いている数があります');
    }
}
startTimer.addEventListener('click', (event) => {
    startNumberdisplay1();
    console.log('ok1');
    startNumberdisplay2();
    console.log('ok2');
    startNumberdisplay3();
    console.log('ok3');
    stopJudgment1 = '';
    stopJudgment2 = '';
    stopJudgment3 = '';
})

setTime1.addEventListener('click', (event) => {
    stopInterval1();
    stopJudgment1 = true;
    stopJudgment();
})

setTime2.addEventListener('click', (event) => {
    stopInterval2();
    stopJudgment2 = true;
    stopJudgment();
})

setTime3.addEventListener('click', (event) => {
    stopInterval3();
    stopJudgment3 = true;
    stopJudgment();
})
