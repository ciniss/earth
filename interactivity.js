const tweets = [];

let postButton = document.querySelector('#postbutton');
let textInput = document.querySelector('#userText');
let usernameInput = document.querySelector('#username');


let postDiv = document.querySelector('#posts');

function refreshTweets(){
    let post = document.createElement('p');
    let tweet = tweets[tweets.length-1];
    post.innerHTML = `${tweet.text}. by: ${tweet.username}`;
    postDiv.appendChild(post);
}

function getData(){
    
    let text = textInput.value;
    textInput.value='';
    let username = usernameInput.value;
    usernameInput.value='';
    tweets.push({text, username});
    refreshTweets();
}
postButton.addEventListener('click',getData);

