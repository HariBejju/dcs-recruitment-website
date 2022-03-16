const hamburger = document.querySelector(".hambergur-menu")
const navMenu = document.querySelector(".first-list")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


const input = document.getElementById("input-dada")
const button = document.getElementById("button")

button.addEventListener("click", e=>{
    e.preventDefault()
    const span = document.getElementById("span")
    const emailValue = input.value
    console.log(emailValue)
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(pattern.test(emailValue)){
        span.innerHTML = "Your email is Valid"
        span.style.color='green'
    }else{
        span.innerHTML = "Please insert a Valid email"
        span.style.color='red'
    }
})

const buttonDa = document.getElementById("button-da")
const inputDa = document.getElementById("input-da")
buttonDa.addEventListener("click", e=>{
    const spanda = document.getElementById("span-da")
    
    e.preventDefault()
    const emailValueda = inputDa.value
    console.log(emailValueda)
    var patternDa = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(patternDa.test(emailValueda)){
        spanda.innerHTML = "Your email is Valid"
        spanda.style.color='green'
    }else{
        spanda.innerHTML = "Please insert a Valid email"
        spanda.style.color='red'
    }
})



// const form = document.querySelector(".form")
// const button = document.querySelector(".button-da")

// button.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     checkInputs()
// })
// function checkInputs(){
    
// const emailValue = form.value
//     if(emailValue === ""){
// //show error
//     } 

// }
// const button = document.querySelector(".button-da")
// button.addEventListener('submit', (e)=>{
//     console.log("hello")
//     e.preventDefault()
//     validation()
// })
// function validation(){
//     var form = document.querySelector(".form")
//     var email = document.getElementById("input-da").value
//     var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if(email.match(pattern)){
//         form.classList.add("valid")
//         form.classList.remove("invalid")
//     }else{
//         form.classList.remove("valid")
//         form.classList.add("invalid")
//     }

// }

// function setError(input, message){
//     const error = document.querySelector('.error')
//     error.innerText = message
// }

// // function ValidateEmail(mail) 
// // {
    
// // const emailValue = form.value
// //  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))
// //   {
// //     return (true)
// //   }
// //     alert("You have entered an invalid email address!")
// //     return (false)
// // }

