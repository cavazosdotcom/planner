$('.save-btn').on('click', function(){
    const time = $(this).attr('id');
    console.log(time);
    
    const value = $(this).siblings('.description').val();
    console.log(value);
    
    localStorage.setItem(time, value);
    
});

// $('#9 .description').val(localStorage.getItem('9'));


for (let i = 9; i < 12; i++){
    $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
};


var currentTime = function (){
    today = moment();
    $('#current-day').text(today.format('MMMM Do YYYY, h:mm:ss a'));
}; 
setInterval(currentTime, 1000);


// $('#9').siblings('.description').val(localStorage.getItem('9'));
// $('#10').siblings('.description').val(localStorage.getItem('10'));
// $('#11').siblings('.description').val(localStorage.getItem('11'));







