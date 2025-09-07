let authUser = [
  {mail: 'admin@gmail.com', password: 'admin'}
]

// still working on the signin
function signin() {
  const userMail = document.querySelector('.signinEmail').value;
  const userPassword = document.querySelector('.signinPassword').value;
  let newUser = {mail: userMail, password: userPassword};

  if (userMail == '' || userPassword === '') {
    signinResponse(false);
    console.error('all field is required');
    return;
  } else {
    authUser.push(newUser);
    signinResponse(true);
    console.log(`success: new user added`);
    clearInput(); 
  }  
}

function authenticate() {   
  const userMail = document.querySelector('.loginEmail').value;
  const userPassword = document.querySelector('.loginPassword').value;

  if (!userMail || !userPassword) {
    loginResponse(false);
    console.log('no input! then use this > ' + JSON.stringify(authUser[0]));
    return;
  }

  let userstatus = false;
  for (let i = 0; i < authUser.length; i++) {
    if (userMail === authUser[i].mail && userPassword === authUser[i].password) {
      console.log(`Details Mapped Correct ${JSON.stringify(authUser[i])} = User Input Mail:${userMail}, User Input Password:${userPassword}`);
      userstatus = true;
      loginResponse(userstatus);
      break;
    }else {
    loginResponse('void');
    console.log(`this is for demo only (email: ${authUser[i].mail}  ,password: ${authUser[i].password})`);
    }
  } 
  clearInput();
}

function clearInput() {
  document.querySelector('.loginEmail').value = '';
  document.querySelector('.loginPassword').value = '';
  document.querySelector('.signinEmail').value = '';
  document.querySelector('.signinPassword').value = '';
}
function signinResponse(param) {
  let signin = document.querySelector('.result2');
  let login = document.querySelector('.result1');
  if (param == false) {
    signin.innerHTML = `<p style="color: red;"> all field required </p>`; 
  } else {
    signin.innerHTML = `<p style="color: green;"> User Created Successfully </p>`; 
  }    
  login.innerHTML = ` `;
}

function loginResponse(param) {
  let signin = document.querySelector('.result2');
  let login = document.querySelector('.result1');
  if (param == 'void') { 
  login.innerHTML = `<p style="color: blue">Incorrect input {check console}</p>`;
  } else if (param == false) {
    login.innerHTML = `<p style="color: red">all field is required</p>`;
  } else{
    login.innerHTML = `<p style="color: green">User logged in successful</p>`;
  }
  signin.innerHTML = ` `;
}