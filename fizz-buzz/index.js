'use strict';

function fizzbuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}

function generateHTML(fizzResult) {
  let fizzClass = '';
  if (typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  }
  return `
    <div class="fizz-buzz-item ${fizzClass}">
      <span>${fizzResult}</span>
    </div>
  `;
}

function handleSubmit() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const count = parseInt($('#number-choice').val());
    $('#number-choice').val('');
    const fizzBuzzResults = [];
    for (let i = 1; i <= count; i++) {
      fizzBuzzResults.push(fizzbuzz(i));
    }
    const newHtml = fizzBuzzResults.map(result => generateHTML(result));
    $('.js-results').html(newHtml);
  });
}

$(handleSubmit);