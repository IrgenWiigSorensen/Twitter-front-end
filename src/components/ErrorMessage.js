import { Component } from "react";

export class ErrorMessage extends Component {
    render() {
        const { message, onTry } = this.props; 

        return (
            <div>
                <h3>Unable to fetch tweets: {message}</h3>
                <button onClick={onTry}>Retry</button>
            </div>
        )
    }
}