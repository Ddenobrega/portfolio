function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let x = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(x)
  return x;
}


function flip(){
  var result = "";
  let x = getRand(1,2);
  if(x == 1){
    result = "Heads";
  }
  else if(x == 2){
    result = "Tails";
  }


  console.log(result);
  return result;
}

function tAndHDomManipulation(image) {
  let x = flip();
  if(x == "Heads"){
      image.setAttribute("src", "./assets/flipHeads.png");
  }
  else if( x == "Tails"){
    image.setAttribute("src", "./assets/flipTails.png");
  }

}

function doFlip(){
  var image = document.getElementById("imageFlip");
  let x = flip();
  image.setAttribute("src", "./assets/coinflip-playanimation.gif");
  setTimeout(() => {tAndHDomManipulation(image);}, 3000)
}
  
