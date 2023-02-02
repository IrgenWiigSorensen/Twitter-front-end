import { Component } from "react";

export class Logout extends Component {

   async componentDidMount() {
        const { history } = this.props;

        localStorage.removeItem('TWITTER_TOKEN')
        history.replace('/')
    }



    render() {
        return (
            <div>Logging out</div>
        )
    }
}