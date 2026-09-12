function setCookie(name, value, days = null, path = "/") {
  let cookieString = `${name}=${value}; path=${path};`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    cookieString += ` expires=${expires};`;
  }

  document.cookie = cookieString;
}

function getCookie(name) {
  // Función auxiliar para decodificar el valor de la cookie
  function decodeCookie(value) {
    return decodeURIComponent(value.replace(/\+/g, " "));
  }

  // Obtener todas las cookies de document.cookie
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = decodeCookie(cookieValue);
    return acc;
  }, {});

  // Encontrar la cookie con el nombre coincidente
  return cookies[name] || null;
}

function eraseCookie(name) {
  setCookie(name, "", -1);
}

// Ejemplos de uso
//setCookie("alumno", "izan"); // Cookie de sesión
//setCookie("asignatura", "javascript", 365); // Cookie de sesión

console.log("Cookies actuales:" + document.cookie);
let cookies = document.cookie.split(";");
for (let i = 0; i < cookies.length; i++) {
  let partes = cookies[i].split("=");
  console.log(`${partes[0]}=${partes[1]}`);
  if (partes[0].trim() === "alumno") {
    console.log("¡Hola " + partes[1] + "!");
  }
}

// Ejemplo de uso
const cookieValue = getCookie("apellido29");
console.log(cookieValue);

setCookie("apellido", "testValue", 7); // Establece una cookie llamada "testCookie" con valor "testValue" que expira en 7 días
console.log(getCookie("apellido")); // Devuelve "javascript"
