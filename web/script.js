console.log("check 1 2 3");

function pictureChange(){
  var image= document.getElementById('angel');
  if (image.src.match("devil")){
    image.src="devil.png";
  }
  else {
    image.src="angel.png";
  }
}
