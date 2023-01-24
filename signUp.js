let btn = document.getElementById('signUpButton')
btn.style.background = '#097969';

document.body.style.background ='#AFE1AF'

let form = document.getElementById('signUpForm')

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    let userName =document.getElementById('user')
    let userEmail = document.getElementById('email')
    let userPassword = document.getElementById('password')

    let userObject = {
        name : userName.value,
        email : userEmail.value,
        password : userPassword.value
    }

    axios.post('http://localhost:3000/user/signup', userObject)
    .then(response => {
        //...... console.log(response)
    })
}