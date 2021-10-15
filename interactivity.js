const tweets = [];

let postButton = document.querySelector('#postbutton');
let textInput = document.querySelector('#userText');
let usernameInput = document.querySelector('#username');


let postDiv = document.querySelector('#posts');

/*
<div class= "post">
    <div class = 'message'>
        <p>Humans are the cancer of EARTH!!!!!</p>
    </div>
    <div class ='message-footer'>
        <p>metacloser</p>
    </div>
</div>
                    */ 


function refreshTweets(){
    let innerMessage = document.createElement('p');
    innerMessage.innerHTML = tweets[tweets.length-1].text;
    let message = document.createElement('div');
    message.className = 'message';
    message.appendChild(innerMessage);
    innerMessage = document.createElement('p');
    innerMessage.innerHTML = tweets[tweets.length-1].username;
    let messageFooter = document.createElement('div');
    messageFooter.className = 'message-footer';
    messageFooter.appendChild(innerMessage);

    let final  = document.createElement('div');
    final.className = 'post';
    final.appendChild(message);
    final.appendChild(messageFooter);
    let where = document.querySelector('#posts');
    where.appendChild(final);
    
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

