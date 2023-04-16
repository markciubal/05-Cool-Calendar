# Cool Calendar

## Description
The purpose of this project was to create a dynamically generated daily schedule application that can be used to store data using setLocalStorage an getLocalStorage.

This can be accomplished fairly quickly by using jQuery's ability to select parents, siblings and children of elements, and extracting the relevant information.

Day.js is also critical to this project for its date functions, specifically allowing the application to get the current time.

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
✅ THEN the current day is displayed at the top of the calendar
WHEN I scroll down
✅ THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
✅ THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
✅ THEN I can enter an event
WHEN I click the save button for that timeblock
✅ THEN the text for that event is saved in local storage
WHEN I refresh the page
✅ THEN the saved events persist
```

## Credits

Coded by Mark Ciubal.

Third-party APIs used: Day.js, jQuery.