const disagree = document.getElementById("disagree")


disagree.addEventListener("mouseover",function(event) { 
    var left = Math.random()*300
    var top = Math.random()*300
    
    disagree.style.left = `${left}px`
    disagree.style.top = `${top}px`
    console.log(left,top)
    
})