// =================== create variables ===================
var select = document.getElementById("select");
var text = document.getElementById("text")
var result = document.getElementById("result")
// event input
text.addEventListener("input", ()=>{
    decode()
})
// function 
function decode(){
    if(select.value == "code"){
        result.value = btoa(text.value);
    }
    else if(select.value == "decode"){
        result.value = atob(text.value)
    }
}