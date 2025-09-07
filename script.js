let authUser = []

  //still working on the signin
function signin() {
  const userMail = document.querySelector('.signinEmail').value;
  const userPassword = document.querySelector('.signinPassword').value;
  let newUser = {mail: userMail, password: userPassword};

	if (userMail === '' || userPassword === '') {
		document.querySelector('.result2').innerHTML = `all field is required`;
	} else {
    authUser.push(newUser);
		document.querySelector('.result2').innerHTML = `<p style="color: green;"> User Created Successfully </p>`;  
		console.log('success')
    console.log(authUser) 
    return clearInput(); 
	}  
}

function authenticate() {   
  const userMail = document.querySelector('.loginEmail').value;
  const userPassword = document.querySelector('.loginPassword').value;

  
  for (let i = 0; i < authUser.length; i++) {
    if (!userMail || !userPassword) {
        document.querySelector('.result1').innerText = `all field is required`;
        console.log('no input use this ' + JSON.stringify(authUser[0]))
    } else {
      if (userMail === authUser[i].mail && userPassword === authUser[i].password) {
          document.querySelector('.result1').innerHTML = `<p style="color: green;">User Logged In Successfully</p>`;
          console.log(`Details Mapped Correct ${JSON.stringify(authUser[i])} = User Input Mail:${userMail}, User Input Password:${userPassword}`);
      } else {
          console.log(`this is for demo only (email: ${authUser[i].mail}  ,password: ${authUser[i].password}`);
          document.querySelector('.result1').innerHTML = `incorrect input check console`;
      }
      return clearInput(); 
    }
  }
  // const test = authUser[i]; //testing
  // console.log(test.mail) //testing
}

function clearInput() {
  document.querySelector('.loginEmail').value = '';
  document.querySelector('.loginPassword').value = '';
  document.querySelector('.signinEmail').value = '';
  document.querySelector('.signinPassword').value = '';
}