const slider = document.getElementById("slider");
const amountText = document.getElementById("amount");
const result = document.getElementById("result");

slider.oninput = function () {
  let value = slider.value;

  amountText.innerText = "Rp " + Number(value).toLocaleString("id-ID");

  let bunga = 0.02;
  let tenor = 12;

  let cicilan = (value * (1 + bunga)) / tenor;

  result.innerText = "Rp " + Math.round(cicilan).toLocaleString("id-ID");
};
