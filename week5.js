onLoad("playAnimation");

// so that the animation plays on load

playAnimation{function myMove() {
  let id = null;
  // the null element is place for an empty string meaning nothing (its just there for now)
  
  const elem = document.getElementById("animate");
  
  // calling the document to reference elements from said document
  
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
// in other words, if the object moves out of frame stop the animation
      
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
     
      /* if the object isnot near the barrier it will move diagonally towards the bottom of the canvas towards the
      border until it hits it and restarts the cycle */
    }
  }
}
}
