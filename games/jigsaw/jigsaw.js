function randomImage(){
  var images = [],
  index = 0;
  images[0] = "./assets/img1.jpg"
  images[1] = "./assets/img2.jpg"
  images[2] = "./assets/img3.jpg"
  images[3] = "./assets/img4.jpg"
  images[4] = "./assets/img5.jpg"
  images[5] = "./assets/img6.jpg"
  images[6] = "./assets/img7.jpg"
  images[7] = "./assets/img8.jpg"
  images[8] = "./assets/img9.jpg"
  images[9] = "./assets/img10.jpg"
  images[10] = "./assets/img11.png"
  index = Math.floor(Math.random() * images.length);
  return images[index];


}
window.addEventListener('load', function () {
  displayImage();
})


var msec = 0,
  sec = 1,
  min = 1,
  hour = 1,
  timerOn = 0;
var msecVar, secVar, minVar, hourVar;

function setMSec() {
  if (msec == null){
    return;
  }
  try{
    document.getElementById("time").innerHTML = "Time: " + msec;
  }
  catch{
    return;
  }
  msec = msec + 1;
  if (timerOn == 0){
    return
  }
  msecVar = setMSec;
  }

function start() {
  if (!timerOn) {
    timerOn = 1;
    setInterval(() => setMSec(), (1000));
  }
}

function stop() {
  clearTimeout(msecVar);
  timerOn = 0;
  return timerOn;
}




function displayImage(){
  var randImage = randomImage();
  setTimeout(() => {
    var imageContainer = document.getElementById('jigsaw-container');
    imageContainer.innerHTML = "<img class='jigsaw' id='jigsaw'> </img>";
    var imageTag = document.getElementById('jigsaw');
    imageTag.setAttribute('src', randImage);
    setTimeout(() => {
      snapfit.defaultAreacolor = "#161616";
      snapfit.defaultPolygon =  true;
      snapfit.defaultNokeys = true;
      snapfit.defaultSimple = true;
      snapfit.defaultForcetouchui = true;
      snapfit.add(imageTag, {callback: function() {
        stop()
        var yourTime = document.getElementById('time');
        var bioBody = document.getElementById('bio-body');
        bioBody.innerHTML = `

        <span id="score" > Your Score is: ` + yourTime.innerText + ` </span> <br>
        <button id="play-again" onclick="location.reload();" class="projects-btn"> Play Again </button>
        

        `
        recvMessages()



      }});
      setTimeout(() => { 
        var yourTime = document.getElementById('time');
        console.log(yourTime.innerText);

      
     }
        , (2000));
    }, (2000));
  }, (2000));
  
}


function recvMessages(){
  var getUrl = "https://discord.com/api/v9/channels/890363358606413854/messages?limit=50"
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
    console.log(parsed);
    for(i = -1; i != max; max--){
        try{
          console.log("in try statement")
          messageDisplay = document.getElementById("bio-body");
          var messageArray = "<span id=msg" + max + ">" +  "<span class='username" + parsed[max]["author"].username + ": " + parsed[max].content + "</span>" + "<br>" ;
          messageDisplay.innerHTML += messageArray;
          console.log(max);
        }
        catch{
          console.log('in catch statement');
          continue;
        }
          }
      });
  return 0;
}




/*
  messageInput.addEventListener("keyup", function(event) {
  if (event.code == "Enter") {
    event.preventDefault();
    document.getElementById("messageBtn").click();
  }
});
*/


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
