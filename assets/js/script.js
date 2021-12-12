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



// if (time < currentTime) {
    // $('.time-block').css("background-color", "grey");
// };









