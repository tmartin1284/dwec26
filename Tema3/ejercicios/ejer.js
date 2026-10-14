function oveja(raza, color, maxleche) {
  this.raza = raza;
  this.color = "Blanca";
  this.maxleche = Math.floor(Math.random() * 10) + 1;

  return this;
}
