const form = document.getElementById("form");
const inputVal = document.getElementById("input");
const insertedVal = document.getElementById("solved");
const btn = document.querySelector("button");
// Event listener
function rand(e) {
  form.addEventListener("input", e => {
    const randVal = e.target.value;

    const geneVal = Math.floor(Math.random(randVal) * randVal);
    insertedVal.innerHTML = geneVal;
    clearTimeout(geneVal);
  });
}
rand();
