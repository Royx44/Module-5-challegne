// Get the current hour
var currentHour = new Date().getHours();

// Get all the time-block divs
var timeBlocks = document.getElementsByClassName("time-block");

// Loop through each time-block div
for (var i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  var hour = parseInt(timeBlock.id); // Assuming the hour is set as the id of each div

  // Remove existing classes
  timeBlock.classList.remove("past", "present", "future");

  // Add appropriate class based on the hour
  if (hour < currentHour) {
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
}
// Get all the time block elements
const timeBlocks = document.getElementsByClassName('time-block');

// Add event listeners to each time block
for (let i = 0; i < timeBlocks.length; i++) {
  timeBlocks[i].addEventListener('click', handleEventEntry);
}

// Event handler function
function handleEventEntry(event) {
  // Get the clicked time block's ID
  const timeBlockId = event.target.id;
  
  // Prompt the user to enter an event
  const eventDescription = prompt('Enter your event:');
  
  // Do something with the event, such as saving it or displaying it
  console.log(`Event entered for ${timeBlockId}: ${eventDescription}`);
}








// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
