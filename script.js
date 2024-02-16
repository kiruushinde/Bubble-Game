var timer = 60;
var score = 0;
var hit = document.querySelector('#hit');
var bubble = document.querySelector(".bottom");
var hitNum = 0;
// var newgm = document.querySelector('#newgm');


// newgm.addEventListener('click', function () {
//     location.reload();
// })

// instead of displaying 1 everytime we will display one random number between 1 to 9
function createBubbles() {
    var circle = "";
    for (var i = 1; i <= 138; i++) {
        var num = Math.floor(Math.random() * 10);
        circle += `<div class="circle">${num}</div>`;
    }

    bubble.innerHTML = circle;
}

function createTimer() {
    setInterval(function () {
        timer--;
        if (timer >= 0) {
            document.querySelector('#timer').textContent = timer;
        }
        else {
            timer = 0;
            var bottom = document.querySelector('.bottom');
            bottom.innerHTML = 'Game Over !!';
            bottom.style.display = 'flex';
            bottom.style.alignItems = 'center';
            bottom.style.justifyContent = 'center';

        }

    }, 1000);
}

function getNewHit() {
    hitNum = Math.floor(Math.random() * 10);
    hit.textContent = hitNum;
    console.log(hitNum);
}

function updateScore() {
    score++;
    document.querySelector('#score').textContent = score;
}

bubble.addEventListener('click', function (val) {
    var num = Number(val.target.textContent);
    console.log(Number(val.target.textContent));

    if (num === hitNum) {
        updateScore();
        createBubbles();
        getNewHit();
    }
})


createBubbles();
createTimer();
getNewHit();
