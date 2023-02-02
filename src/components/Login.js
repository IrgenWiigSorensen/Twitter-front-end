import { Component } from "react";
import { getLoginToken } from "../services/getTweets";

class Login extends Component {
    constructor(props) {
      super(props); 

      this.state = {
        username: '', 
        password: '', 
        error: null
      }
    }

    handleInputFieldChange(field, event) {
      this.setState({
        [field]: event.target.value,
      })
    }

    async handleLoginAttempt() {
      const { username, password } = this.state; 
      const { history } = this.props; 

      try {
        //Make request to create token. 
        const { token, error } = await getLoginToken(username, password);

        //Check if we got any errors from server
        if(error) {
          throw new Error(error);
        }
        // check if we actually got a token. 
        if(!token) {
          throw new Error('something went wrong'); 
        }

        //Add token to local storage
        localStorage.setItem('TWITTER_TOKEN', token);

        //Redirect to feed
        history.replace('/')

      } catch (error) {
        //Log or add error to state to show to user. 
        this.setState({
          error
        })
      }
    }

    render() {
      const { error, username, password } = this. state; 
        return (
            <div>
                <h1>Login</h1>
                <div>
                    <label>
                        Username: 
                        <input 
                          type="text" 
                          onChange={this.handleInputFieldChange.bind(this, 'username')}
                          value={username} />
                    </label>
                </div>
                <div>
                    <label>
                        Password: 
                        <input 
                          type="password" 
                          onChange={this.handleInputFieldChange.bind(this, 'password')} 
                          value={password} 
                          />
                    </label> 
                </div>
                <div>
                    <button onClick={this.handleLoginAttempt.bind(this)}>Log in</button>
                </div>
                {error && (
                  <div>
                    Error: {error.message}
                  </div>
                )}
            </div>
        )
    }
}

export default Login;