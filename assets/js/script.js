// selects save-btn class and on click calls this function
// time variable set to the id of the save button clicked 
// the value is set to whatever is inside the text box with the description class
// Both set to local storage
$('.save-btn').on('click', function(){
    const time = $(this).attr('id');
    console.log(time);
    
    const value = $(this).siblings('.description').val();
    console.log(value);
    
    localStorage.setItem(time, value);
    
});


// between 9 and 5(17 military time), select each time id # and the description
// then get the value with the correlating time in local storage so the
// events shown stay upon page reload instad of clearing
for (let i = 9; i <= 17; i++){
    $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
};


// creates function for the current time in the jumbotron
// var today is set to the current moment from moment.js
// then we select the current day id and give the format to our moment.js time value
var currentTime = function (){
    const today = moment();
    $('#current-day').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}; 
// On page load the time from moment.js should count by seconds
setInterval(currentTime, 1000);


// function to change color of each hour block in the planner based on the current time of day
// our current hour is based on moment.js hours
// selects each time-block class and for each one, we run the function
// we then create our own plannerHour to compare to the moment.js current hour
// then we select the time-block divs and dig to select the id inside the child
// of our parent div that is a button element
// We compare the real moment.js time and each hour block to add and remove our given css styling
function hourColor() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $('.time-block').each(function () {
        var plannerHour = parseInt($(this).children('button').attr('id'));
        console.log(this);
        console.log(plannerHour);
        if (currentHour > plannerHour){
            // $(this).css("background-color", 'yellow');
            $(this).addClass('past');
        } else if (currentHour === plannerHour){
            // $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            // $(this).removeClass('present');
            $(this).addClass('future');
        };
    });
};
hourColor();






