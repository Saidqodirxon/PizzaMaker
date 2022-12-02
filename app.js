// Umumiy JS kodlari variablelar
let form = document.querySelector("form");
let umumiyNarx = 1;
document.querySelector(
  ".narxlovchi"
).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;

// // non start
let nonInput = document.querySelector("#non");
let nonDiv = document.querySelector("#pitsalars");

nonInput.addEventListener("input", (e) => {
  e.preventDefault();

  if (nonInput.checked === true) {
    nonDiv.style.background = "#e8944f";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;

    document.getElementById("non").value = "active";
  } else {
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    nonDiv.style.background = "white";

    document.getElementById("non").value = "disable";
  }
});

// Kolbasa start
let kolbasaInput = document.querySelector("#kolbasa");
let kolbasaDiv = document.querySelector("#kolbasalars");
let kolbasaText = document.querySelector(".kolbasa-text");
kolbasaDiv.style.display = "none";

kolbasaInput.addEventListener("input", (e) => {
  e.preventDefault();
  let val = kolbasaInput.value;

  if (kolbasaInput.checked === true) {
    kolbasaDiv.classList.add("kolbasalar");
    kolbasaDiv.style.display = "block";
    umumiyNarx += 1;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // kolbasaText.textContent = `Kolbasa qoshildi `;
    document.getElementById("kolbasa").value = "active";
  } else {
    kolbasaDiv.classList.add("kolbasalar");
    kolbasaDiv.style.display = "none";
    umumiyNarx -= 1;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // kolbasaText.textContent = `Kolbasa olindi `;
    document.getElementById("kolbasa").value = "disable";
  }
});

// kolbasa end

// Pamidor start

let pamidor = document.querySelector("#pamidor");
let pamidorDiv = document.querySelector("#pamidorlars");
let pamidorText = document.querySelector(".pamidor-text");
pamidorDiv.style.display = "none";

pamidor.addEventListener("input", (e) => {
  e.preventDefault();
  let val = pamidor.value;

  if (pamidor.checked === true) {
    pamidorDiv.classList.add("pamidorlar");
    pamidorDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // pamidorText.textContent = `Pamidor qoshildi `;
    document.getElementById("pamidor").value = "active";
  } else {
    pamidorDiv.classList.add("pamidorlar");
    pamidorDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // pamidorText.textContent = `Pamidor olindi `;
    document.getElementById("pamidor").value = "disable";
  }
});

// kolbasa end

// qoziqorin start

let qoziqorin = document.querySelector("#qoziqorin");
let qoziqorinDiv = document.querySelector("#qoziqorinlars");
let qoziqorinText = document.querySelector(".qoziqorin-text");
qoziqorinDiv.style.display = "none";

qoziqorin.addEventListener("input", (e) => {
  e.preventDefault();
  let val = qoziqorin.value;

  if (qoziqorin.checked === true) {
    qoziqorinDiv.classList.add("qoziqorinlar");
    qoziqorinDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // qoziqorinText.textContent = `qoziqorin qoshildi `;
    document.getElementById("qoziqorin").value = "active";
  } else {
    qoziqorinDiv.classList.add("qoziqorinlar");
    qoziqorinDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // qoziqorinText.textContent = `qoziqorin olindi `;
    document.getElementById("qoziqorin").value = "disable";
  }
});

// qoziqorin end

// pishloq start

let pishloq = document.querySelector("#pishloq");
let pishloqDiv = document.querySelector("#pishloqlars");
let pishloqText = document.querySelector(".pishloq-text");
pishloqDiv.style.display = "none";

pishloq.addEventListener("input", (e) => {
  e.preventDefault();
  let val = pishloq.value;

  if (pishloq.checked === true) {
    pishloqDiv.classList.add("pishloqlar");
    pishloqDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // pishloqText.textContent = `pishloq qoshildi `;
    document.getElementById("pishloq").value = "active";
  } else {
    pishloqDiv.classList.add("pishloqlar");
    pishloqDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // pishloqText.textContent = `pishloq olindi `;
    document.getElementById("pishloq").value = "disable";
  }
});

// pishloq end

// zaytun start

let zaytun = document.querySelector("#zaytun");
let zaytunDiv = document.querySelector("#zaytunlars");
let zaytunText = document.querySelector(".zaytun-text");
zaytunDiv.style.display = "none";

zaytun.addEventListener("input", (e) => {
  e.preventDefault();
  let val = zaytun.value;

  if (zaytun.checked === true) {
    zaytunDiv.classList.add("zaytunlar");
    zaytunDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // zaytunText.textContent = `zaytun qoshildi `;
    document.getElementById("zaytun").value = "active";
  } else {
    zaytunDiv.classList.add("zaytunlar");
    zaytunDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // zaytunText.textContent = `zaytun olindi `;
    document.getElementById("zaytun").value = "disable";
  }
});

// zaytun end

// mayonez start

let mayonez = document.querySelector("#mayonez");
let mayonezDiv = document.querySelector("#mayonezlars");
let mayonezText = document.querySelector(".mayonez-text");
mayonezDiv.style.display = "none";

mayonez.addEventListener("input", (e) => {
  e.preventDefault();
  let val = mayonez.value;

  if (mayonez.checked === true) {
    mayonezDiv.classList.add("mayonezlar");
    mayonezDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // mayonezText.textContent = `mayonez qoshildi `;
    document.getElementById("mayonez").value = "active";
  } else {
    mayonezDiv.classList.add("mayonezlar");
    mayonezDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // mayonezText.textContent = `mayonez olindi `;
    document.getElementById("mayonez").value = "disable";
  }
});

// mayonez end

// ketchup start

let ketchup = document.querySelector("#ketchup");
let ketchupDiv = document.querySelector("#ketchuplars");
let ketchupText = document.querySelector(".ketchup-text");
ketchupDiv.style.display = "none";

ketchup.addEventListener("input", (e) => {
  e.preventDefault();
  let val = ketchup.value;

  if (ketchup.checked === true) {
    ketchupDiv.classList.add("ketchuplar");
    ketchupDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // ketchupText.textContent = `ketchup qoshildi `;
    document.getElementById("ketchup").value = "active";
  } else {
    ketchupDiv.classList.add("ketchuplar");
    ketchupDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // ketchupText.textContent = `ketchup olindi `;
    document.getElementById("ketchup").value = "disable";
  }
});

// ketchup end

// kokat start

let kokat = document.querySelector("#kokat");
let kokatDiv = document.querySelector("#kokatlars");
let kokatText = document.querySelector(".kokat-text");
kokatDiv.style.display = "none";

kokat.addEventListener("input", (e) => {
  e.preventDefault();
  let val = kokat.value;

  if (kokat.checked === true) {
    kokatDiv.classList.add("kokatlar");
    kokatDiv.style.display = "block";
    umumiyNarx += 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // kokatText.textContent = `kokat qoshildi `;
    document.getElementById("kokat").value = "active";
  } else {
    kokatDiv.classList.add("kokatlar");
    kokatDiv.style.display = "none";
    umumiyNarx -= 0.5;
    document.querySelector(
      ".narxlovchi"
    ).textContent = `Pitsa narxi : ${umumiyNarx}-USD`;
    // kokatText.textContent = `kokat olindi `;
    document.getElementById("kokat").value = "disable";
  }
});

// kokat end
