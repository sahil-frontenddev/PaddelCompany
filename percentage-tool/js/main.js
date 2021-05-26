
$(document).on('ready',function(){

    console.log("ready");

$(document).on('click','#calculate-percent',function(){

    var percent=parseInt($('#input-percent').val());
    var total=parseInt($('#input-total').val())
    $("#calculation").val((percent/100)*total);
    // (percent/100)*number
})
$(document).on('click','#calculate-percent1',function(){

    var number=parseInt($('#input1-number').val());
    var total=parseInt($('#input1-total').val())
    $("#input1-calculation").val((number/total)*100);
    // (percent/100)*number
})
$(document).on('click','#calculate-percent2',function(){

    var number=parseInt($('#input2-number').val());
    var total=parseInt($('#input2-total').val())
    var diff=total-number;
    $("#input2-calculation").val((diff/number)*100);
    // (percent/100)*number
})

})

