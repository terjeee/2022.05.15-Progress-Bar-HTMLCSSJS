// ---- // const, let // ---- //

const progressBar = document.querySelector(`#progressBar`);
const btnTilbake = document.querySelector(`#btnTilbake`);
const btnFrem = document.querySelector(`#btnFrem`);

// ---- // function's // ---- //

function changeProgressValue(targetEl, value, operator) {
  const currentVal = Number(targetEl.getAttribute(`value`));

  targetEl.setAttribute(`value`, `${eval(currentVal + operator + value)}`);
}

// ---- // addEventListener // ---- //

btnTilbake.addEventListener(`click`, function (event) {
  if (+progressBar.getAttribute(`value`) === 0) return;

  const operator = `-`;
  changeProgressValue(progressBar, 25, operator);

  console.log(progressBar.getAttribute(`value`));
});

btnFrem.addEventListener(`click`, function (event) {
  if (+progressBar.getAttribute(`value`) === 100) return;

  const operator = `+`;
  changeProgressValue(progressBar, 25, operator);

  console.log(progressBar.getAttribute(`value`));
});
