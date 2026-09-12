// Establecer un elemento en local storage
localStorage.setItem("myCenter", "IES Azarquiel");
localStorage.setItem("myName", "Tomas");
// Obtener un elemento de local storage

console.log("mi centro: " + localStorage.getItem("myCenter")); // Muestra "IES Azarquiel"
// Eliminar un elemento de local storage
localStorage.removeItem("myCenter");
console.log("mi centro despues de borrar: " + localStorage.getItem("myCenter"));
console.log("mi nombfre: " + localStorage.getItem("myName")); // Muestra null
// Eliminar todos los datos guardados en localStorage
localStorage.clear();
console.log("mi nombre despues de clear: " + localStorage.getItem("myName")); // Muestra null
