let authUser = {
      mail: 'admin@gmail.com',
      password: 'admin'
  }

  //still working on the signin
function signin() {
	const userMail = document.querySelector('.signinEmail').value;
	const userPassword = document.querySelector('.signinPassword').value;

  let newUser = {
		mail: userMail,
		password: userPassword
	}

	if (userMail === '' || userPassword === '') {
		document.querySelector('.result2').innerHTML = `all field is required`;

	} else {
    authUser = newUser;
		document.querySelector('.result2').innerHTML = `<p style="color: green;"> User Created Successfully </p>`;  
		console.log('success') 
    return clearInput(); 
	}  
}

function authenticate() {   
  const userMail = document.querySelector('.loginEmail').value;
  const userPassword = document.querySelector('.loginPassword').value;

  if (!userMail || !userPassword) {
      document.querySelector('.result1').innerText = `all field is required`;
  } else {
    if (userMail === authUser.mail && userPassword === authUser.password) {
        document.querySelector('.result1').innerHTML = `<p style="color: green;">User Logged In Successfully</p>`;
        console.log(`Details Mapped Correct ${JSON.stringify(authUser)} = User Input Mail:${userMail}, User Input Password:${userPassword}`);
    } else {
        console.log(`this is for demo only (email: ${authUser.mail}  ,password: ${authUser.password}`);
        document.querySelector('.result1').innerHTML = `incorrect input check console`;   
    }
    return clearInput(); 
  }
}
function clearInput() {
  document.querySelector('.loginEmail').value = '';
  document.querySelector('.loginPassword').value = '';
  document.querySelector('.signinEmail').value = '';
  document.querySelector('.signinPassword').value = '';
}