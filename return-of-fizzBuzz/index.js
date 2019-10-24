'use strict';

function handleClicks() {
  $('#number-chooser').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    // this will clear the results if there any there.
    $('.js-results').empty();
    
    // store individual numbers in a results array 
    // and then append to the results section of the page.
    const gameNum = parseInt($(event.currentTarget).find('#number-choice').val());
    const results = [];
    
    // for each number btwn 1 and gameNum do the following 
    for (let i = 1; i < gameNum; i++) {
      // if it's divisible by 3 and 5, create a fizzbuzz element
      if (i % 15 === 0) {
        results.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
        // if it's divisible by only 5, create a buzz element
      } else if (i % 5 === 0) {
        results.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      } else if (i % 3 === 0) {
        results.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>'));
        // otherwise, create a fizz-buzz-item element that just displays `num`
      } else {
        results.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }
    // attach our results to the ".js-results" element in the DOM
    $('.js-results').append(results);
  });
}

$(handleClicks);