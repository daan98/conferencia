let nombre = document.getElementById("name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let divError = document.getElementById("error");

//// VALIDACIÓN DE DATOS DEL COMPRADOR
nombre.addEventListener("blur", personalInformation);
last_name.addEventListener("blur", personalInformation);
email.addEventListener("blur", personalInformation);
email.addEventListener("blur", validatingEmail);

function personalInformation() {
  if (this.value === "") {
    divError.setAttribute(
      "style",
      "display: block; text-align: center; padding: 10px; margin: 30px 30px 0 30px; background-color: #F2EB27; border: 1px solid red;"
    );
    divError.innerHTML = "este campo es necesario, Por favor llena el campo";
    this.setAttribute("style", "border: 1px solid red;");
  }
  if (nombre.value !== "" && last_name.value !== "" && email.value !== "") {
    divError.setAttribute("style", "display: none;");
    this.setAttribute("style", "border: 1px solid black;");
  }
}

function validatingEmail() {
  const validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const validation = email.value.match(validEmail);
  if (validation) {
    divError.setAttribute("style", "display: none;");
    email.setAttribute("style", "border: 1px solid black;");
  } else {
    divError.setAttribute(
      "style",
      "display: block; text-align: center; padding: 10px; margin: 30px 30px 0 30px; background-color: #F2EB27; border: 1px solid red;"
    );
    divError.innerHTML = "Email no valido.";
  }
}

function onClickPayment() {
  window.location.reload();
}
