import { Component } from "react";
import { createTweet, getTweets } from "../services/getTweets";
import { ErrorMessage } from "./ErrorMessage";
import Header from "./Header";
import { Tweet } from "./Tweet";

class Feed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tweets: [], 
            isLoading: true,
            error: null,
            newTweetText: '',
        }
    }

    handleChangeNewTweetText(event) {
        this.setState({
            newTweetText: event.target.value,
        })
    }

    async handleSubmitNewTweet(){
        const { newTweetText } = this.state; 
        //Post create new Tweet through Api
        await createTweet(newTweetText)
        //Clear textArea
        this.setState({ newTweetText:''})
        //Refecth tweets.
        this.handlePopulateTweets(); 
    }

  

    async componentDidMount() {
         this.handlePopulateTweets();   
    }

    async handlePopulateTweets() {
        this.setState( {
            isLoading: true,
            error: null,
        })

        try{
            const tweetArray = await getTweets(); 

            this.setState( {
                tweets: tweetArray,
                isLoading: false,
            })
        } catch(error) {
            this.setState({
                error: error,
            })
        }
    }

    render() {
    const { tweets, error, isLoading, newTweetText } = this.state;

    if(error) {
        return(
            <ErrorMessage message={error.message} onTry={this.handlePopulateTweets.bind(this)} />
        )
    };

    if (isLoading) {
        return(
            <div>Loading tweets...</div>
        )
    }

   
    

    const tweet = tweets.map((tweet) => { 
        return <Tweet tweetInfo={tweet} />
    }
  )

        return(
            <>
               <Header />
               <div>
                <label>
                    Write a new Tweet
                    <div>
                        <textarea 
                            rows="3" 
                            placeholder="New tweet?" 
                            value={newTweetText} 
                            onChange={this.handleChangeNewTweetText.bind(this)}>   
                        </textarea>
                    </div>
                </label>
                <button onClick={this.handleSubmitNewTweet.bind(this)}>Post Tweet</button>
               </div>
               
               
                {tweet}
            </>
         
        )
    }

}

export default Feed;