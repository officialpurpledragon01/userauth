let authUser = JSON.parse(localStorage.getItem('authUser')) || [];

if (!authUser) {
  let testUser = {mail: 'test@gmail.com', password: 'test'};
  authUser.push(testUser);
}

// still working on the signin
function signup() {
  const userMail = document.querySelector('.signupEmail').value.trim();
  const userPassword = document.querySelector('.signupPassword').value.trim();
  const newUser = {mail: userMail, password: userPassword};
  const mailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  if (userMail === '' || userPassword === '') {
    signupResponse(false);
    console.error('all field is required');
    return;
  } if (!mailpattern.test(userMail)) {
    signupResponse('void')
    console.error('invalid email format');
  } else {
    authUser.push(newUser);
    localStorage.setItem('authUser', JSON.stringify(authUser));
    signupResponse(true);
    console.log(`success: new user added`);
    clearInput(); 
  }  
}

function login() {   
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
      console.log(
        `Input Match Found ✓
[Matched Email : ${JSON.stringify(authUser[i].mail)} => User Input Mail:${userMail}] 
[Matched Password : ${JSON.stringify(authUser[i].password)} => User Input Password:${userPassword}]`);
      userstatus = true;
      loginResponse(userstatus);
      break;
    } if (userMail === 'admin@gmail.com' && userPassword === 'admin') {
      loginResponse(userstatus);
      window.location.href = 'React Version/react.html';
    } else {
    loginResponse('void');
    }
  } 
  clearInput();
}

function clearInput() {
  document.querySelector('.loginEmail').value = '';
  document.querySelector('.loginPassword').value = '';
  document.querySelector('.signupEmail').value = '';
  document.querySelector('.signupPassword').value = '';
}

function signupResponse(param) {
  const signup = document.querySelector('.result2');
  const login = document.querySelector('.result1');
  if (param == false) {
    signup.innerHTML = `<p style="color: red;"> all field required </p>`; 
  } else if (param == 'void') {
    signup.innerHTML = `<p style="color: grey;"> invalid email format </p>`; 
  } else {
    signup.innerHTML = `<p style="color: green;"> User Created Successfully </p>`; 
  }    
  login.innerHTML = ` `;
}

function loginResponse(param) {
  const signup = document.querySelector('.result2');
  const login = document.querySelector('.result1');
  if (param == 'void') { 
  login.innerHTML = `<p style="color: blue">Incorrect input {check console}</p>`;
  } else if (param == false) {
    login.innerHTML = `<p style="color: red">all field is required</p>`;
  } else{
    login.innerHTML = `<p style="color: green">User logged in successful</p>`;
  }
  signup.innerHTML = ` `;
}