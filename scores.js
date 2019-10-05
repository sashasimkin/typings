let scoreboardEl = document.querySelector('#scoreboard');
let scoreboardBody = scoreboardEl.querySelector('tbody');

function displayScores() {
  let data = JSON.parse(localStorage.getItem('playersData')) || {};
  let items = [];

  for (let [key, value] of Object.entries(data)) {
    items.push({
        'name': key,
        'wpm': value.wpm,
        'acc': value.acc,
    });
  }
  sortScores(items);
  // Ugli displaying stuff
  let scoreData = '';
  items.forEach(function (el, idx) {
      let position = idx + 1;
      scoreData += `<tr><td>${position}</td>` +
      `<td>${el.name}</td>` +
      `<td>${el.wpm}</td>` +
      `<td>${el.acc}</td>` +
      '</tr>';
  });

  if (scoreData) {
      scoreboardBody.innerHTML = scoreData;
  }
}

function sortScores(arr) {
  arr.sort(function (a, b) {
    return b.wpm - a.wpm || b.acc - a.acc;
  });
}

displayScores();
