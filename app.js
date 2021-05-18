const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const reset = document.querySelector('#resetbutton')
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const winningscoreselect = document.querySelector('#highscore');

let p1score = 0;
let p2score = 0;
let winningscore = 5;
let gameisover = false;


p1button.addEventListener('click', function () {


    if (!gameisover) {
        p1score += 1
    }

    if (p1score === winningscore) {

        gameisover = true;
        p1display.classList.add('has-text-success');
        p2display.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;
    }
    p1display.textContent = p1score;
})


p2button.addEventListener('click', function () {


    if (!gameisover) {
        p2score += 1


        if (p2score === winningscore) {

            gameisover = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;

        }
        p2display.textContent = p2score;
    }
})




winningscoreselect.addEventListener('change', function () {

    winningscore = parseInt(this.value);
    resetting();

})


reset.addEventListener('click', resetting)



function resetting() {

    gameisover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;



}












/*p2button.addEventListener('click', function () {
    if (p2score !== winningscore) {
        p2score += 1
        p2display.textContent = p2score;
    }
})
if (p1score = 5) {

    p2display.textContent = 0;
}*/