let nombre = document.getElementById("name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let divErrorName = document.getElementById("error-name");
let divErrorLastName = document.getElementById("error-last-name");
let divErrorEmail = document.getElementById("error-email");

//// VALIDACIÓN DE DATOS DEL COMPRADOR
nombre.addEventListener("blur", personalInformationName);
last_name.addEventListener("blur", personalInformationLastName);
// email.addEventListener("blur", personalInformation);
email.addEventListener("blur", validatingEmail);

function personalInformationName(e) {
  console.log("personalInformation: ", this, e);
  if (nombre.value === "") {
    divErrorName.setAttribute(
      "style",
      "display: block; text-align: center; padding: 10px; margin: 30px 30px 0 30px; background-color: #F2EB27; border: 1px solid red;"
    );
    divErrorName.innerHTML =
      "El campo 'Nombre' es necesario, Por favor llena el campo";
    this.setAttribute("style", "border: 1px solid red;");
    return;
  }

  divErrorName.setAttribute("style", "display: none;");
  nombre.setAttribute("style", "border: 1px solid black;");
}

function personalInformationLastName() {
  if (!last_name.value) {
    divErrorLastName.setAttribute(
      "style",
      "display: block; text-align: center; padding: 10px; margin: 30px 30px 0 30px; background-color: #F2EB27; border: 1px solid red;"
    );
    divErrorLastName.innerHTML =
      "El campo 'Apellido' es necesario, Por favor llena el campo";
    this.setAttribute("style", "border: 1px solid red;");
    return;
  }

  divErrorLastName.setAttribute("style", "display: none;");
  last_name.setAttribute("style", "border: 1px solid black;");
}

function validatingEmail() {
  const validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const validation = email.value.match(validEmail);
  if (validation) {
    divErrorEmail.setAttribute("style", "display: none;");
    email.setAttribute("style", "border: 1px solid black;");
  } else {
    divErrorEmail.setAttribute(
      "style",
      "display: block; text-align: center; padding: 10px; margin: 30px 30px 0 30px; background-color: #F2EB27; border: 1px solid red;"
    );
    divErrorEmail.innerHTML = "Por favor, escriba un email valido.";
    email.setAttribute("style", "border: 1px solid red;");
  }
}

function onClickPayment() {
  window.location.reload();
}
