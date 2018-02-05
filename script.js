document.querySelector('.mole1').style.display = 'none';
document.querySelector('.mole2').style.display = 'none';
document.querySelector('.mole3').style.display = 'none';
document.querySelector('.mole4').style.display = 'none';
document.querySelector('.mole5').style.display = 'none';
document.querySelector('.mole6').style.display = 'none';

let mole;
let score = 0;
let mole1 = false
let mole2 = false
let mole3 = false
let mole4 = false
let mole5 = false
let mole6 = false

let mole1Click = 0


const moleSelect = () => {
    mole = Math.floor(Math.random() * 6 + 1);
    console.log(mole)
}

const bonk = () => {
    score++
    document.querySelector('.mole' + mole).style.display = 'none'
    document.querySelector('.scoreX').textContent = 'SCORE: ' + score
} 

const peep = () => {

    document.querySelector('.mole' + mole).style.display = 'block'
    if (mole == 1) {
        mole1 = true
    } else if (mole == 2) {
        mole2 = true
    } else if (mole == 3) {
        mole3 = true
    } else if (mole == 4) {
        mole4 = true
    } else if (mole == 5) {
        mole5 = true
    } else if (mole == 6) {
        mole6 = true
    }
document.querySelector('.mole' + mole).addEventListener('click', bonk)

        setTimeout(function () {
            let mole1 = false
            let mole2 = false
            let mole3 = false
            let mole4 = false
            let mole5 = false
            let mole6 = false
            document.querySelector('.mole' + mole).style.display = 'none'
        }, Math.random() * 3000 + 1000)
}

const x = () => {
    moleSelect()

    peep()



}
let y = setInterval(x, 2100)