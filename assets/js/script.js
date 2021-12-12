// var time;
// var value;
// var today;

$('.save-btn').on('click', function(){
    const time = $(this).attr('id');
    console.log(time);
    
    const value = $(this).siblings('.description').val();
    console.log(value);
    
    localStorage.setItem(time, value);
    
});



for (let i = 9; i < 12; i++){
    $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
};


var currentTime = function (){
    const today = moment();
    $('#current-day').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}; 
setInterval(currentTime, 1000);


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






