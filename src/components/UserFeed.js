import { Component } from "react";
import { getUserTweets } from "../services/getTweets";
import Header from "./Header";
import { Tweet } from "./Tweet";

class UserFeed extends Component {
    constructor(props) {
        super(props); 

    this.state = {
        userTweets: [], 
    }
    }

    async componentDidMount() {
        const username = this.props.match.params.username; 
        const userTweetArray = await getUserTweets(username); 

        this.setState( {
            userTweets: userTweetArray,
        })
    }

    render() {
        const { userTweets } = this.state;

        console.log(userTweets);

        const styleTweetsHeader = {
            margin: '0',
            padding: '5px 60px',
        }

        const styleTweets = {
            border: '1px solid black', 
            margin: '5px 5% 5px 5%',
            padding: '5px',
        }



        const tweet = userTweets.map((tweet) => {
                return <Tweet tweetInfo={tweet} />
        })

        return(
            <div>
                <Header />
                <div style={styleTweetsHeader}> <h3>Tweets by {userTweets[0]?.name}</h3> </div>
                {tweet}
            </div>
        )
    }
}

export default UserFeed; 