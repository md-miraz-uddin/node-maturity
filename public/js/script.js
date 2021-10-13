let input = document.querySelector("#age");
let select = document.querySelector("#gender");
let result = document.querySelector("#result");
let gender = select.value;

maturityTest();

select.addEventListener("change", function () {
  gender = select.value;
  maturityTest();
});

input.addEventListener("keyup", function () {
  maturityTest();
});

function maturityTest() {
  let age = input.value;
  let eligibility = "matured";
  if (gender === "male") {
    eligibility = age >= 21 ? "matured" : "not matured";
  } else {
    eligibility = age >= 18 ? "matured" : "not matured";
  }

  result.innerHTML = `You are a ${gender}, your age is ${age}. <br>You are ${eligibility} enough to Marry Now by the BD LAW`;
}
