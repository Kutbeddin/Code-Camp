const sayaç = document.querySelector(".sayaç")
const dec = document.getElementById("decrease")
const reset = document.getElementById("reset")
const inc = document.getElementById("increase")


count = 0

reset.addEventListener("click" ,() => {
    count = 0
    sayaç.innerHTML = `${0}`

})

dec.addEventListener("click", ()=>{
    count--;
    sayaç.innerHTML = `${count}`

    
})

inc.addEventListener("click",()=>{
    count++;
    sayaç.innerHTML = `${count}`

})