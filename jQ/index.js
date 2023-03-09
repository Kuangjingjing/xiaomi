// app
$('.app').hover(function() {
    // console.log($('.app1'))
    $('.app1').stop(true).slideToggle()

})

// 购物车
$('.rr').hover(function() {
    $(this).css('background-color', 'white')
}, function() {
    $(this).css('background-color', '')
})


$('.rr').hover(function() {

    $('.gou').stop(true).slideToggle()

})

// 手机
$('.phone1').hover(function() {
    // console.log($('.app1'))
    $('.sjimg').stop(true).slideToggle()

})



// 选项卡