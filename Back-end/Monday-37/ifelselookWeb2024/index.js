// Get the container element
const container = document.getElementById("number-list");

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  let div = document.createElement("div");
  div.textContent = i;
  div.classList.add("number");
  if (i % 2 === 0) {
    div.classList.add("even");
  } else {
    div.classList.add("odd");
  }
  div.addEventListener("click", (event) => {
    let allDivs = document.querySelectorAll("div");
    for (let div of allDivs) {
      div.classList.remove("highlight");
    }
    event.target.classList.add("highlight");
  });
  container.appendChild(div);
}

// Create a new div element for each number

// Check if the number is even or odd and apply the appropriate class

// Add an event listener to highlight the number when clicked

// Remove highlight from all numbers

// Add highlight to the clicked number

// Append the new div to the container
