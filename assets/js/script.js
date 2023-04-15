// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Loading spinner.
window.onload = function() {
  $('.loader').remove();
}
$(function () {
  // Show the loading spinner when the DOM is ready.
  $('.loader').show();

  // Set the time text immediately when the DOM is ready.
  function setTimeText() {
    let currentTime = dayjs().format();
    $('#currentDay').text(currentTime);
  }

  function buildDay() {
    let zeroPrefix =  '';
    for (let i = 9; i <= 17; i++) {
      if (i <= 9){
        zeroPrefix = '0';
      } else {
        zeroPrefix =  '';
      }
      $('#hourblocks').append(`
      <div id="hour-${i}}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${zeroPrefix + i + "00"}</div>
        <textarea class="col-8 col-md-10 description" rows="3"></textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
      `);
    }
  }
  function updateStyling() {
    $('.time-block').children('.hour').each(function() {
      let thisHour = dayjs().hour();
      // Clear styling.
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');

      // Use regular expressions to strip out hour value.
      let thisIDRegex = $(this).parent().attr('id').match(/\d+/g);
      if (thisHour < +thisIDRegex) {
        $(this).siblings('textarea').addClass('future');
      } else if (thisHour === +thisIDRegex) {
        $(this).siblings('textarea').addClass('present');
      } else if (thisHour > +thisIDRegex){
        $(this).siblings('textarea').addClass('past');
      }
    });
  }
  buildDay();
  setTimeText();
  updateStyling();
  // Load in data if it is set for each hour.
  $('.time-block').children('.hour').each(function() {
    let siblingTextarea = $(this).siblings('textarea');
    let storedValue = localStorage.getItem($(this).parent().attr('id'));
    siblingTextarea.val(storedValue);
  })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function(event) {
    let siblingTextarea = $(this).siblings('textarea');
    let siblingTime = $(this).parent().attr('id');
    localStorage.setItem(siblingTime, siblingTextarea.val());
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // From https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery
  window.setInterval(function(){
   updateStyling();
   setTimeText();
  }, 1000);
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
