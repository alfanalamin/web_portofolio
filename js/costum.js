

// function email js
function validate(){
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;
  var message = document.querySelector('.message').value;
  var sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(name == '' || email == '' || message == ''){
      emptyerror();
    }else{
    sendmail(name, email, message);
      success();
    }
  });
}

validate();

function sendmail(name, email, message){
  Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To : 'alfanalamin.com',
    From : "alfanalamin123.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

function emptyerror(){
  swal({
    title: "error!",
    text: "Filler all the field!",
    icon: "error",
  })
}

function success(){
  swal({
    title: "success!",
    text: "Your message has been sent!",
    icon: "success",
  })
}