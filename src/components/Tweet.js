import { Component } from "react";
import { Link } from 'react-router-dom';
import { getFormattedTime } from "../utils/dates";

export class Tweet extends Component {



    render() {
        const tweet = this.props.tweetInfo;
        const { id, name, message, username, created_at } = tweet;

        const styleTweets = {
            border: '1px solid black', 
            margin: '5px 5% 5px 5%',
            padding: '5px',
        /*  backgroundColor: 'rgb(29, 161, 242)' */
        }

        return (
            <div key={id} style={styleTweets}>
                <h1>{name}</h1>
                <Link to={`/user/${username}`}>@{username}</Link>
                <p>{message}</p>
                <p>{getFormattedTime(created_at)}</p>
            </div>
        )
    }
}