import React, { Component } from "react";
import Header from "./Header";
import Title from "./Title";
import { CardList, CardListItem } from "./CardList";

class CardContainer extends Component {
    state = {
        guessedArr: [],
        topScore: 0,
        curCardArr: [
            {id: 1, src: "/assets/images/photo1.jpg"},
            {id: 2, src: "/assets/images/photo2.jpg"},
            {id: 3, src: "/assets/images/photo3.jpg"},
            {id: 4, src: "/assets/images/photo4.jpg"},
            {id: 5, src: "/assets/images/photo5.jpg"},
            {id: 6, src: "/assets/images/photo6.jpg"},
            {id: 7, src: "/assets/images/photo7.jpg"},
            {id: 8, src: "/assets/images/photo8.jpg"},
            {id: 9, src: "/assets/images/photo9.jpg"},
            {id: 10, src: "/assets/images/photo10.jpg"},
            {id: 11, src: "/assets/images/photo11.jpg"},
            {id: 12, src: "/assets/images/photo12.jpg"},
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
    };
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

    render() {
        return (
            <div>
                <Header />
                <Title />
                <CardList>
                    {this.state.curCardArr.map(card => (
                        <CardListItem key={card.id} src={card.src} />
                        )
                    )}
                </CardList>
            </div>
        )
    }

}

export default CardContainer;