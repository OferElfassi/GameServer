class Player {
    constructor(name, maxScore) {
        this.name = name;
        this.score = 0;

        this.maxScore = maxScore || 21;

        this.isAlive = true;
    }

    getName() {
        return this.name;
    }

    getScore() {
        return this.score;
    }

    addScore(score) {
        if (!this.isAlive) return false;

        this.score += score;

        if (this.score > this.maxScore) {
            this.isAlive = false;
        }

        return true;
    }
}
//        <img class="cardNo1" src="https://s3.amazonaws.com/img.playingarts.com/three-small-hd/3-of-hearts-dan-matutina.jpg?2"/>
module.exports = Player;