var email

email = document.getElementById('email').value;


function ValidateEmail(email)
{
var mailformat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
if(email.value.match(mailformat))
{
alert("Tu correo es válido!");    
document.formularioContacto.email.focus()
return true;
}
else
{
alert("El correo es inválido");   
document.formularioContacto.email.focus()
return false;
}
}