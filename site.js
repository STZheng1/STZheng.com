const buttonCalcTip = document.querySelector('#buttonCalcTip');
const finalBill = document.querySelector('#finalBill');
const ok = document.querySelector('#radioOK');
const great = document.querySelector('#radioGreat');
const amazing = document.querySelector('#radioAmazing');
const spanTip = document.querySelector('#spanTip');

finalBill.addEventListener('input', () => {
  buttonCalcTip.disabled = false;
  ok.disabled = false;
  great.disabled = false;
  amazing.disabled = false;
});

buttonCalcTip.addEventListener('click', () => {
  if (finalBill.value === null || undefined) {
    return;
  }
  const tipCalculate = calculateTip(parseInt(finalBill.value));
  spanTip.innerHTML = tipCalculate;
});

function calculateTip(num) {
  if (ok.checked) {
    return calculateTipAmount(num, 0.12);
  } else if (great.checked) {
    return calculateTipAmount(num, 0.15);
  } else if (amazing.checked) {
    return calculateTipAmount(num, 0.17);
  }
}

function calculateTipAmount(number, serviceLevel) {
  let tipAmount = parseInt(number * serviceLevel);
  let totalBill = parseInt(number + tipAmount);
  return `Bill: ${number}, Tip: ${tipAmount}, Total Bills: ${totalBill}`;
}
