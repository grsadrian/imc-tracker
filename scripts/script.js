const form = document.querySelector("#imc-form");
const inputs = form.querySelectorAll("input");
const resultImcContainer = document.querySelector("#imc-result");
const resultImc = document.querySelector("#result");
const resultComplement = document.querySelector("#result-complement");
const resultDescribe = document.querySelector("#result-describe");
const errorMessage = document.querySelector(".error-message");

[...inputs].forEach((input) => input.addEventListener("change", validateInput));

form.addEventListener("submit", calculateIMC);

function calculateIMC(event) {
  event.preventDefault();
  if ([...inputs].some((input) => input.classList.contains("error"))) {
    return;
  }
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const imc = weight / height ** 2;
  resultImc.innerHTML = imc.toFixed(1);
  resultImcContainer.classList.add("ativo");
  resultComplement.classList.add("ativo");
  if (imc >= 18.5 && imc <= 24.9) {
    result.style.color = "#00920F";
    resultDescribe.innerText = "Parabéns ! Você está com um peso normal.";
  } else if (imc > 24.9 && imc <= 30) {
    result.style.color = "#FFCE00";
    resultDescribe.innerText = "Cuidado ! Você está com sobrepeso.";
  } else if (imc > 30) {
    result.style.color = "#E65359";
    resultDescribe.innerText =
      "Busque ajuda profissional. Você pode estar com um quadro de obesidade.";
  } else {
    result.style.color = "#FFCE00";
    resultDescribe.innerText =
      "Atenção ! Você está com um peso abaixo do normal, indicando magreza.";
  }
}

function validateInput(event) {
  event.target.value === "0"
    ? showErrorMessage("Valor inválido", event.target.closest(".input-wrapper"))
    : removeErrorMessage(event.target);
}

function showErrorMessage(message, element) {
  element.firstElementChild.classList.add("error");
  errorMessage.innerText = message;
  element.appendChild(errorMessage);
}

function removeErrorMessage(element) {
  element.classList.remove("error");
  errorMessage.innerText = "";
}
