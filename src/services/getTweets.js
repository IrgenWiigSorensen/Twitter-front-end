const API_URL = ('http://localhost:3333')

export async function getTweets() {
    const response = await fetch(`${API_URL}/tweets`);
    const data = await response.json(); 
    
    return data; 
}

export async function getUserTweets(username) {
    const response = await fetch(`${API_URL}/tweets/${username}`);
    const data = await response.json(); 
    
    return data; 
}

export async function createTweet(username, text) {
    const response = await fetch(`${API_URL}/tweets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-User': {username}
        },
        body: JSON.stringify({text})
    });
    const data = await response.json(); 
    
    return data; 
}