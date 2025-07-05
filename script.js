// Have user enter total bill
// Have user enter group size
// User clicks Calculate button
// Calculate total bill/group size
// Display split value

function billSplit() {
  // let totalBill = Number(document.getElementById("bill").value);
  // let groupSize = Number(document.getElementById("split").value);
  let totalBill = document.getElementById("bill").value;
  let groupSize = document.getElementById("split").value;

  if (totalBill === "" || groupSize === "") {
    document.querySelector("h2").textContent = "Missing field";
    document.querySelectorAll("button")[1].classList.add("style");
  }
  // else if ((isNaN(totalBill)) || (isNaN(groupSize))) {
  //   document.querySelector("h2").innerHTML = "Invalid entry";
  // }
  // else if (totalBill == 0 || groupSize == 0) {
  //   document.querySelector("h2").textContent = "Value cannot be zero";
  // }
  // else if (totalBill < 0 || groupSize < 0) {
  //   document.querySelector("h2").textContent = "Value cannot be negative"
  // }
  
  else if (totalBill == 0 || groupSize == 0){
    document.querySelector("h2").textContent = "Value cannot be zero";
    document.querySelectorAll("button")[1].classList.add("style");
  }
  
  else {
    let splitTotal = Number((totalBill / groupSize)).toFixed(2);
    document.getElementById("each").textContent = `$${splitTotal}`;
    document.querySelector("h2").textContent = "";
    document.querySelectorAll("button")[1].classList.remove("style");
  }
  console.log(typeof totalBill)
}

document.querySelector("button").addEventListener("click", billSplit);

function resetBtn(){
  document.getElementById("bill").value = "";
  document.getElementById("split").value = "";
  document.getElementById("each").textContent = "$" + 0;
  document.querySelector("h2").textContent = "";
  document.querySelectorAll("button")[1].classList.remove("style");
}

document.querySelectorAll("button")[1].addEventListener("click", resetBtn);
