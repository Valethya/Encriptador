//botones
let encript = document.querySelector(".encriptar");
let desencript = document.querySelector(".desencriptar");
let copy = document.querySelector(".result");
//texto
let result = document.querySelector(".result");

const encriptar = () => {
  debugger;
  let encriptador = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encriptandoString = document.querySelector(".text-area").value;
  for (let i = 0; i < encriptador.length; i++) {
    if (encriptandoString.includes(encriptador[i][0])) {
      encriptandoString = encriptandoString.replaceAll(
        encriptador[i][0],
        encriptador[i][1]
      );
    }
  }
  result.innerHTML = `
    <div class="result-desencript">
    <textarea class="text text-area">${encriptandoString}</textarea>
    <button class="btn desencriptar copiar">Copiar</button>
    </div>
         
           `;
};

const desencriptar = () => {
  let desencriptador = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  desencriptandoString = document.querySelector(".text-area").value;

  for (let i = 0; i < desencriptador.length; i++) {
    if (desencriptandoString.includes(desencriptador[i][1])) {
      desencriptandoString = desencriptandoString.replaceAll(
        desencriptador[i][1],
        desencriptador[i][0]
      );
    }
  }

  result.innerHTML = `
      <div class="result-desencript">
      <textarea class="text text-area">${desencriptandoString}</textarea>
      <button class="btn desencriptar copiar">Copiar</button>
      </div>
           
             `;
};

const copiar = (e) => {
  debugger;
  if (e.target.classList.contains("copiar")) {
    let copy = document.querySelector(".text");
    copy.select();
    navigator.clipboard.writeText(copy.value);
  }
};

encript.addEventListener("click", encriptar, false);
desencript.addEventListener("click", desencriptar, false);
copy.addEventListener("click", copiar, false);

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
