const SPEED = 2000;
const MOLE_APPEARANCE = 800;
const holes = document.querySelectorAll('main article');

holes.forEach(hole => {
    hole.addEventListener('click', (event) => {
        const whackedHole = game.whack(event.target);
        game.evalHit(whackedHole);
    });
});

const gameLoop = setInterval(() => {
    game.showMole();
}, SPEED);

const timer = setInterval(() => {
    game.updateTime();
}, 1000);

let game = {
    currentHole: null,
    molesWhacked: 0,
    currentTime: 60,
    removeMole() {
        holes.forEach(hole => hole.classList.remove('mole'));
    },
    showMole() {
        //console.log('this:', this);
        this.removeMole(); // this refererar till detta objekt, se ovan console.log

        const randomHole = Math.floor(Math.random() * holes.length);

        this.currentHole = randomHole;

        const holeElem = document.querySelector(`[data-id="${this.currentHole}"]`);
        holeElem.classList.add('mole');

        setTimeout(() => {
            this.removeMole();
            this.currentHole = null;
        }, MOLE_APPEARANCE);
    },
    whack(hole) {
        let whackedHole = hole.getAttribute('data-id');
        return whackedHole;
    },
    evalHit(whackedHole) {
        if (parseInt(whackedHole) === this.currentHole) {
            // Hit!
            this.updateScore();

            document.querySelector(`[data-id="${whackedHole}"]`).classList.add('hit');
            setTimeout(() => {
                document.querySelector(`[data-id="${whackedHole}"]`).classList.remove('hit');
            }, MOLE_APPEARANCE);
        }
    },
    updateScore() {
        this.molesWhacked++;

        document.querySelector('.moleswhacked b').innerHTML = this.molesWhacked;
    },
    updateTime() {
        if(this.currentTime >= 0) {

            // Update timer in gui
            document.querySelector('.timeleft b').innerHTML = `${this.currentTime}s`;
    
            // count down current time
            this.currentTime--;
    
        } else {
            // Game over
            clearInterval(timer)
            clearInterval(gameLoop)
    
            alert(`You whacked ${this.molesWhacked} moles in 60 sec.`)
        }
    }
}