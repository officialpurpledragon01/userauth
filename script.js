const authUser = {
      mail: 'admin@gmail.com',
      password: 'admin'
  }



function authenticate() {   
  const userMail = document.querySelector('.email').value;
  const userPassword = document.querySelector('.password').value;

  if (!userMail || !userPassword) {
      document.querySelector('.result').innerText = `all field is required`;
      console.log('incorrect email or password');
  } else {
    if (userMail === authUser.mail && userPassword === authUser.password) {
        document.querySelector('.result').innerHTML = `<p style="color: green;">User Logged In Successfully</p>`;
        console.log(`Details Mapped Correct ${JSON.stringify(authUser)} = Input Mail:${userMail}, Input Password:${userPassword}`);
    } else {
        console.log(`this is for demo only (email: ${authUser.mail}  ,password: ${authUser.password}`);
        document.querySelector('.result, .result2').innerHTML = `incorrect input check console`;   
    }
  } 
}

