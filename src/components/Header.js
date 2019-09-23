import React, { Component } from "react";

class Header extends Component {
    state = {
        answerResponse: "",
        score: null
    }

    componentDidMount() {
        this.setState({
            answerResponse: this.props.answerResponse,
            score: this.props.score
        })
    }
    
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.score !== prevProps.score) {
          this.setState({
              score: this.props.score
          })
        }
      }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">ClickyGame</span>
                <span className="navbar-text">
                    {this.state.answerResponse}
                </span>
                <span className="navbar-text">
                    {this.state.score}
                </span>
            </nav>
        )
    };
};


export default Header