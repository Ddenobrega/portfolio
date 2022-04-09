function plainEmail(){
  const malitoElement = document.getElementById("malito-redirect");
  const malitoHover2 = "daryl111000@gmail.com";
  const malitoHover1 = "Gmail";
  const malitoText = malitoElement.innerText;
  if(malitoText == malitoHover1){
    malitoElement.innerHTML = malitoHover2
  }
  else if(malitoText == malitoHover2){
    console.log("elif 1")
    malitoElement.innerHTML =  malitoHover1;
  }
}


function plainNum(){
  const waElement = document.getElementById("whatsapp-redirect");
  console.log("run");
  const waHover1 = "Whatsapp";
  const waHover2 = "+5926289341";
  const waText = waElement.innerText;
  console.log(waText);
  if(waText == waHover1){
    console.log("if");
    waElement.innerHTML = waHover2;
  }
  else if(waText == waHover2){
    waElement.innerHTML = waHover1;
  }
}

function leaveSite(){
  if (window.confirm("You Are about to leave this site. Are you sure you want to continue?") == true){
    window.open("https://github.com/ddenobrega" , "Redirecting");
  }
  else{
    return;
  }
}

function easterEgg(){
  var count = 0;
  clickable = document.getElementById("easteregg");
  clickable.onclick = function() {
    count++
    console.log(count);
  if (count == 10){
    location.href = "./null/nullnew.html";
  }
  }

  
}

function disabled(){
  var button = document.getElementsByClassName("grid-btn-disabled");
  button.innerHTML = "UNAVALIABLE"
}