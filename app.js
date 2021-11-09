const menü = document.querySelector(".menü");
const buttonn = document.getElementById("clickk")
const body = document.querySelector("body")


  
 buttonn.addEventListener("click" , () =>{
    const  randomcolor1 = Math.round(Math.random() * 255)
    const  randomcolor2 = Math.round(Math.random()*255)
    const randomcolor3 = Math.round(Math.random() *255)
    const  randompx = Math.round(Math.random() * 400)


    
    buttonn.style.transform = `translate(${randompx}px,${randompx}px)`
    body.style.backgroundColor = `rgb(${randomcolor1},${randomcolor3},${randomcolor2})`
    buttonn.style.color = `rgb(${randomcolor2},${randomcolor1},${randomcolor3})`
    buttonn.style.backgroundColor = `rgb(${randomcolor3},${randomcolor2},${randomcolor1})`
    
}  )