const personajes = [
  "billsjpeg",
  "bobo",
  "brolly",
  "bubu",
  "gizmo",
  "buhan",
  "bulma",
  "c18",
  "cell",
  "chau",
  "cichi",
  "freezer",
  "gohan",
  "goku",
  "gotten",
  "hero",
  "karin",
  "krilin",
  "mutenroi",
  "pam",
  "piccolo",
  "porunga",
  "puer",
  "shengon",
  "tenshinhan",
  "trunks",
  "vegeta",
  "videl",
  "yamcha",
];

function UpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//-------------------------------------------

const cardejemplo = document.getElementById("cardejemplo");

cardejemplo.getElementsByTagName("h4")[0].textContent = "algo";
cardejemplo.getElementsByTagName("p")[0].textContent = "algo";
const padre = cardejemplo.parentElement;
padre.removeChild(cardejemplo);

for (personaje of personajes) {
  const card = cardejemplo.cloneNode(true);
  card.setAttribute("id", `card-${personaje}`);
  card.getElementsByTagName("h4")[0].textContent = UpperFirst(personaje);
  card.getElementsByTagName("p")[0].textContent =
    "Descripción de " + UpperFirst(personaje);
  card.getElementsByTagName("img")[0].src = `img/${personaje}.jpg`;
  card.getElementsByTagName("img")[0].alt = personaje;

  padre.appendChild(card);

  if (personaje === "goku") {
    card.classList.add("border", "border-danger", "border-5");
    card.classList.remove("col-xl-3");
    card.classList.add("col-xl-6");
  }

  card.addEventListener("mouseover", (e) => {
    card.classList.add("shadow");
    card.classList.add("col-xl-4");
  });

  card.addEventListener("mouseout", (e) => {
    card.classList.remove("shadow");
    card.classList.remove("col-xl-4");
  });
}
/*Todo lo que viene ahora lo has creado tu solit @con javascript y  jugando con el DOM

      y esto solo la punta del iceberg de todo lo que vas a crear!!!
venga! vamos a por ello*/

const a = document.createElement("a");
//cuidadiinn joorrlll, que estamos con un literal de cadena
const archivo = new Blob(
  [
    `
<!doctype html>
<html lang="en">
` +
      document.head.outerHTML +
      `




<!-- Todo lo que viene ahora lo has creado tu solit@ con javascript y jugando con el DOM
     y esto solo la punta del iceberg de todo lo que vas a crear!!!
     venga! vamos a por ello  -->








` +
      document.body.outerHTML +
      `
</html>`,
  ],
  { type: "html" },
);
const url = URL.createObjectURL(archivo);
a.href = url;
a.download = "statico.html";
a.innerHTML = "descarga el htlm que has creado con js y el dom";
document.getElementsByTagName("footer")[0].appendChild(a);
