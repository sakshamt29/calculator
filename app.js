const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const bin = document.querySelector(".bin");
const back = document.querySelector(".back");
// console.log(bin);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const num = btn[i].getAttribute("data-num");
    screen.value += num;
  });
}
equal.addEventListener("click", function () {
  if (screen.value === "") alert("No input");
  else {
    const val = eval(screen.value);
    screen.value = val;
  }
});
ac.addEventListener("click", function () {
  screen.value = "";
});
bin.addEventListener("click", function () {
  const aa = parseInt(screen.value);
  let binary = "";
  let temp = aa;

  while (temp > 0) {
    if (temp % 2 == 0) {
      binary = "0" + binary;
    } else {
      binary = "1" + binary;
    }

    temp = Math.floor(temp / 2);
  }
  screen.value = binary;
});
back.addEventListener("click", function () {
  screen.value = screen.value.slice(0, screen.value.length - 1);
});

// ***Made by Saksham Tomar******//
