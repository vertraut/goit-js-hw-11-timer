const timerRefs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

//console.log(dateСalculation(500000000).hours);

const targetDate = new Date("Jan 1, 2021");

setInterval(() => {
  const dateEventCalculated = targetDate - Date.now();

  const dateNowCalculated = timerSeparator(dateEventCalculated);

  uptadeTimerUI(dateNowCalculated);
}, 1000);

function uptadeTimerUI({ days, hours, mins, secs }) {
  timerRefs.days.innerHTML = days;
  timerRefs.hours.innerHTML = hours;
  timerRefs.mins.innerHTML = mins;
  timerRefs.secs.innerHTML = secs;
}

function timerSeparator(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
}
