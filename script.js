console.log(firebase)

var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signIn = document.getElementById("signIn")

signup.addEventListener("click", async function(){
   await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
   .then((user)=>{
    console.log(user.user.uid)
   })
   .catch((error)=>{
    alert(error.message)
   })
   
})

signIn.addEventListener("click", async function (){
   await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
   .then((user)=>{
    console.log(user.user.uid)
   })
   .catch((error)=>{
    alert(error.message)
   })
   
})