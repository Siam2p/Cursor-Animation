const cursor = document.querySelector(".cursor");
var timeout;

// cursor movement
document.addEventListener("mousemove", (e)=>{
    let y = e.pageY;
    let x = e.pageX;

    cursor.style.top = y+"px";
    cursor.style.left = x+"px";
    cursor.style.display = "block";

    // stop animation 
    function stopAnimation(){
        cursor.style.display = "none";
    }

    // hide animation
    clearTimeout("timeout")
    timeout = setTimeout(stopAnimation, 3000);
})

//stop animation of the screen
document.addEventListener("mouseout",()=>{
    cursor.style.display = "none";
})