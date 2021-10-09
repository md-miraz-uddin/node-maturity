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
  let str = "";
  if (gender === "male") {
    if (age >= 21) {
      str = `You are a ${gender}, your age is ${age}. <br>You are matured enough to Marry Now by the BD LAW`;
    } else {
      str = `You are a ${gender}, your age is ${age}. <br>You are not matured enough to Marry Now by the BD LAW`;
    }
  } else {
    if (age >= 18) {
      str = `You are a ${gender}, your age is ${age}. <br>You are matured enough to Marry Now by the BD LAW`;
    } else {
      str = `You are a ${gender}, your age is ${age}. <br>You are not matured enough to Marry Now by the BD LAW`;
    }
  }
  result.innerHTML = str;
}
