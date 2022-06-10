


  let passw01 = document.querySelector(".passw01");
  let passw02 = document.querySelector(".passw02");
  let passw03 = document.querySelector(".passw03");
  let passUnHide01 = document.querySelector("#passUnHide01");
  let passUnHide02 = document.querySelector("#passUnHide02");
  let passUnHide03 = document.querySelector("#passUnHide03");



  passUnHide01.addEventListener("click", () =>{
    if(passw01.type === 'password'){
      passw01.type = 'text';
      passUnHide01.classList.replace("fa-eye-slash","fa-eye");
    }else{
      passw01.type = 'password';
      passUnHide01.classList.replace("fa-eye","fa-eye-slash");
    }
  })


  passUnHide02.addEventListener("click", () =>{
    if(passw02.type === 'password'){
      passw02.type = 'text';
      passUnHide02.classList.replace("fa-eye-slash","fa-eye");
    }else{
      passw02.type = 'password';
      passUnHide02.classList.replace("fa-eye","fa-eye-slash");
    }
  })

  passUnHide03.addEventListener("click", () =>{
    if(passw03.type === 'password'){
      passw03.type = 'text';
      passUnHide03.classList.replace("fa-eye-slash","fa-eye");
    }else{
      passw03.type = 'password';
      passUnHide03.classList.replace("fa-eye","fa-eye-slash");
    }
  })




  let passwords = document.querySelector(".passwords");
  let emails = document.getElementById("emails");
  let LogInEmail = document.getElementById("LogInEmail");
  let logInPassword = document.getElementById("logInPassword");




  let logInBtn = document.getElementById("logInBtn");
  let Switch = document.querySelector(".switch");
  let submitLogIn = document.querySelector("#submitLogIn");
  let signup = document.querySelector(".signupa");
  let login = document.querySelector(".logina");
  let SinUpSec = document.querySelector("#sign-up-section");

  let usenam = document.getElementById("usenam");
  let conpassw = document.getElementById("conpassw");



  let submitLabel = document.getElementById("submit_label");
  let regBtn = document.getElementById("regBtn");


  let conMsg = document.getElementById("conMsg");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");


  login.addEventListener("click", () => {
    logInBtn.classList.add("active");
    SinUpSec.style.height = ("390px");

    submitLogIn.style.display = ("block");
    LogInEmail.style.display = ("block");
    logInPassword.style.display = ("block");

    submitLabel.style.display = ("none");
    usenam.style.display = ("none");
    conpassw.style.display = ("none");
    regBtn.style.display = ("none");
    emails.style.display = ("none");
    passwords.style.display = ("none");




  })

  signup.addEventListener("click", () => {
    logInBtn.classList.remove("active");
    SinUpSec.style.height = ("570px");

    usenam.style.display = ("block");
    conpassw.style.display = ("block");
    regBtn.style.display = ("none");
    submitLabel.style.display = ("block");
    emails.style.display = ("block");
    passwords.style.display = ("block");

    submitLogIn.style.display = ("none");
    LogInEmail.style.display = ("none");
    logInPassword.style.display = ("none");
  })





  confirmPassword.addEventListener("keyup", () =>{
    let main_pass = password.value;
    let confirmPass = confirmPassword.value;



    if(main_pass == confirmPass){
      conMsg.innerHTML = "";
      regBtn.style.display = "block";
      submitLabel.style.display = "none";
    }else{
      conMsg.innerHTML = "Password not Matched!";
      regBtn.style.display = "none";
      submitLabel.style.display = "block";
    }

  })




  password.addEventListener("keyup", () =>{
    let main_pass = password.value;
    let confirmPass = confirmPassword.value;



    if(confirmPass == main_pass){
      conMsg.innerHTML = "";
      regBtn.style.display = "block";
      submitLabel.style.display = "none";
    }else{
      conMsg.innerHTML = "Password not Matched!";
      regBtn.style.display = "none";
      submitLabel.style.display = "block";
    }

  })


