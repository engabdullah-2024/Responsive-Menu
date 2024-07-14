let iconButton = document.querySelector("#iconButton")
let ulElement = document.querySelector("#links")
let buttons = document.querySelector("#buttons")
let close = document.querySelector("#closeButton")
iconButton.addEventListener("click", function(){
ulElement.style.display = "flex"
buttons.style.display = "block"
iconButton.style.display = "None"
close.style.display = "block"

})

close.addEventListener("click", function(){
    ulElement.style.display = "none"
buttons.style.display = "none"
iconButton.style.display = "block"
close.style.display = "none"

})