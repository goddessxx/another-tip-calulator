/* Variables */
let bill_amount = document.getElementById("bill-amount");
let tip_amount = document.getElementById("tip-amount");
let people_count = document.getElementById("people-count");
let results = document.getElementById("results");
let results_per_person = document.getElementById("results-per-person");
let button = document.getElementById("button");
/* Calculator Function */
function calculator() {
  let results_calc =
    parseFloat(bill_amount.value) * parseFloat(tip_amount.value) +
    parseFloat(bill_amount.value);
  let tip_per_person =
    parseFloat(results_calc) / parseFloat(people_count.value);
  results.innerHTML = "Bill Amount With Tip: $" + results_calc.toFixed(2);
  results_per_person.innerHTML =
    "Bill Amount Per Person With Tip: $" + tip_per_person.toFixed(2);
}
