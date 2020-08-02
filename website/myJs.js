const button =  document.querySelector("#generate")

var myInterval 

function randNum(){
     return (Math.floor((Math.random() * 253) + 1));
    }

function changeStyle(){
    button.style.borderTop = `7px solid  rgb(${randNum()} , ${randNum()} ,${randNum()})` // i changed the style here so i can generate rndom colors while hovering over the button
    button.style.borderTopLeftRadius = "2px"
    button.style.borderTopRightRadius = "2px"
}
button.addEventListener("mouseover" , ()=>{
    changeStyle()
    myInterval =  setInterval(()=> changeStyle() , 200)
    
})
button.addEventListener("mouseleave", ()=>{
    window.clearInterval(myInterval)
    button.style.border = "none"
})
