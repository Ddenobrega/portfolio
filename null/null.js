
var messageInput = document.getElementById("message");

function recvMessages(){
  var getUrl = "https://discord.com/api/v9/channels/889768352057290762/messages?limit=50";
  fetch(getUrl, {
  method: "GET",
   headers: {
     "authorization": "mfa.8u8GDkimJlwsYAepPpaEg2Jl_Gptb9oYmEKvjWco9PLXMZ-ttBhKnjRIT70FjWXwa5WrOCW7oNUFli8dT48C"
   }
  })
  .then(response => response.json())
  .then(data => {
    var x = JSON.stringify(data);
    var max = 49;
    var i;
    var parsed = JSON.parse(x);
    var lastMessage = document.getElementById('msg0').innerHTML
    var lastArrayMsg = JSON.stringify(parsed[0]["author"].username + ": " + parsed[0].content)
      if ('"' + lastMessage + '"' == lastArrayMsg){
        return
      }
      else{
        if (lastMessage == "loading"){
          document.getElementById('msg0').remove()
          lastMessage = ''
          for(i = -1; i != max; max--){
            var messageArray = "<span id=msg" + max + ">" +  "<span class='username" + parsed[max]["author"].username + ": " + parsed[max].content + "</span>" + "<br>" ;
            messageDisplay = document.getElementById("message-display")
            messageDisplay.innerHTML += messageArray;
          }
        }
      else{
        var messageDisplay = document.getElementById("message-display");
        messageDisplay.innerHTML = ''
        for(i = -1; i != max; max--){
            var messageArray = "<span id=msg" + max + ">" + '<span class="username-message" >' + parsed[max]["author"].username + '</span>' + ": " + parsed[max].content + "</span>" + "<br>" ;
            messageDisplay.innerHTML += messageArray;
          }
      }
    return;

  }
  });
  return 0;
}




messageInput.addEventListener("keyup", function(event) {
  if (event.code == "Enter") {
    event.preventDefault();
    document.getElementById("messageBtn").click();
  }
});


function messageData(){
  var messageUsername = document.getElementById('username').value
  var message = document.getElementById('message').value
  if (message == ""){
    return;
  }
  else{
    messageSend(message, messageUsername);
    document.getElementById('message').value = '';
  }

}



function messageSend(message, messageUsername){

  const request = new XMLHttpRequest();
  const url = "https://discord.com/api/webhooks/890096990002753536/0GYhT1jf8M7vEsNnGNfRVCzL5zF4qtroiTke9_dpWKitkC3rA2o0nP_FeS69AzW-jkzl";
  const messageParams = {
    username: messageUsername,
    avatar_url: "",
    content: message
  }


  request.open("POST", url); 
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSON.stringify(messageParams));

}
setInterval(() => recvMessages(),5000)
