import React, { Component } from "react";
import Header from "./Header";
import Title from "./Title";
import { CardList, CardListItem } from "./CardList";

class CardContainer extends Component {
    state = {
        guessedArr: [],
        topScore: 0,
        curScore: 0,
        curAnswerResponse: "",
        curCardArr: [
            {id: 1, src: "./assets/images/photo1.jpg"},
            {id: 2, src: "./assets/images/photo2.jpg"},
            {id: 3, src: "./assets/images/photo3.jpg"},
            {id: 4, src: "./assets/images/photo4.jpg"},
            {id: 5, src: "./assets/images/photo5.jpg"},
            {id: 6, src: "./assets/images/photo6.jpg"},
            {id: 7, src: "./assets/images/photo7.jpg"},
            {id: 8, src: "./assets/images/photo8.jpg"},
            {id: 9, src: "./assets/images/photo9.jpg"},
            {id: 10, src: "./assets/images/photo10.jpg"},
            {id: 11, src: "./assets/images/photo11.jpg"},
            {id: 12, src: "./assets/images/photo12.jpg"},
        ]
    }
    
    componentDidMount() {
        this.renderCards(this.state.curCardArr);
        console.log(this.state);
    }

    renderCards = (cardArr) => {
        this.setState(
            {curCardArr: this.shuffleArray(cardArr)}
        )
    }

    // Fisher-Yates shuffle: takes a random element from the entire array, puts it as the final spot in the array, and then repeats on the array minus the final spot, and so on until the first element in the array is set. 
    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };
        return array
    };

    // click listener that increases 
    handleClick = event => {
        let gameOver = false; 
        let clickedKey = parseInt(event.target.getAttribute("data-value"));
        this.state.guessedArr.forEach( element => {
            if (clickedKey === element) {
                gameOver = true;
                return this.restartGame()
            }
        });
        if (gameOver === false) {
            this.state.guessedArr.push(clickedKey);
            console.log(this.state);
            let newScore = this.state.curScore + clickedKey
            console.log(newScore)
            this.setState({
                curAnswerResponse: "You guess correctly!",
                curScore: newScore
            });
        };
    }

    restartGame = () =>  {
        console.log("restart game")

        if(this.state.curScore > this.state.topScore) {
            this.setState({
                topScore: this.state.curScore
            });
        };
        this.setState({
            guessedArr: [],
            curScore: 0,
            curAnswerResponse: "You guessed incorrectly"
        });
        this.renderCards(this.state.curCardArr);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Header key={this.state.curAnswerResponse} score={this.state.curScore} answerResponse={this.state.curAnswerResponse} topScore={this.state.topScore} />
                <Title />
                <CardList>
                    {this.state.curCardArr.map(card => (
                        <CardListItem id={card.id} src={card.src} key={card.id} handleClickFunction={this.handleClick}/>
                        )
                    )}
                </CardList>
            </div>
        )
    }

}

export default CardContainer;