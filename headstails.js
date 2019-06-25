const button = document.querySelector("button");
const gene = document.querySelector(".generated");
button.addEventListener("click", function() {
  const possibleOc = ["heads", "tails"];
  const headsOrtails = Math.floor(Math.random(possibleOc) * 2);
  gene.innerHTML = `<h2>It was a ${possibleOc[headsOrtails]}</h2>`;
});
