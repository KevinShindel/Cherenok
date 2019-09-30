// Показываем модалку для авторизации
$('.user-navigation__button').click(function(){
  $('#user_auth').addClass('modal-show');
  $('.modal-backdrop').show();
});

// Показываем модалку для авторизации
$('.callback__button').click(function(){
  $('#recall').addClass('modal-show');
  $('.modal-backdrop').show();
});


// хайдим любую модалку по бэкдропу
$('.modal-backdrop').click(function(){
  $('.modal').removeClass('modal-show');
  $('.modal-backdrop').hide();
});

// хайдим любую модалку по кнопке
$('.modal__button-close').click(function(){
  $('.modal').removeClass('modal-show');
  $('.modal-backdrop').hide();
});

// Показываем модалку для регистрации
$('#reg_link').click(function(){
    $('.modal').removeClass('modal-show');
    $('#user_registration').addClass('modal-show');
})

// Показываем модалку для восстановления пароля
$('#password_restore').click(function(){
  $('.modal').removeClass('modal-show');
  $('#pass_restore').addClass('modal-show');
})


// Показываем модалку авторизации если вспомнил пароль
$('#remember_pass').click(function() {
  $('.modal').removeClass('modal-show');
  $('#user_auth').addClass('modal-show');
});

// Показать скрыть пароль
$('i.pass').click(function(event) {
  if ($('.modal_password').attr("type") === "text") {
    $('.modal_password').attr("type", "password");
    $(event.target).addClass('fa-eye-slash').removeClass('fa-eye');
  }else {
    $('.modal_password').attr("type", "text");
    $(event.target).addClass('fa-eye').removeClass('fa-eye-slash');
  }
});

$('.goods-list__button').click(function(event){
  $('goods-list__button').removeClass('button__active');
  $(event.target).toggleClass('button__active');
  console.log('Menu opened!')
});

// Отображение резульатов поиска
$('.main_search__input').on('input', function(event){
  if (event.target.value !== '') {
    $('.main-search_results').addClass('show-search_results')
  } else {
      $('.main-search_results').removeClass('show-search_results')
  }
});


// Скрытие меню покупки
$('.sale-item').on('mouseover',function(event) {
  $(this).find('.sale-item-buy').addClass('sale-menu-show');
  $(this).find('.sale-image-show').addClass('image-show-active');
});

$('.sale-item').on('mouseout',function(event) {
  $(this).find('.sale-item-buy').removeClass('sale-menu-show')
  $(this).find('.sale-image-show').removeClass('image-show-active');
});

// Функциональность клавиш покупок
$('.sale-buy-increment').on('click',function(event) {
  $(this).siblings('.sale-buy-counter').val(function(i, oldval) {
    return ++oldval
  })
});

$('.sale-buy-decrement').on('click',function(event) {
  $(this).siblings('.sale-buy-counter').val(function(i, oldval) {
    if (oldval > 1) {
       return --oldval
     } else {
       return 1
     }
  })
});


$(document).ready(function() {

  // Карусель
  $('.news_carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="custom-next"></button>',
    prevArrow: '<button type="button" class="custom-prev"></button>'
  });

  $('.sell-out_carousel').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="custom-next"></button>',
    prevArrow: '<button type="button" class="custom-prev"></button>',
});

// Функция задания дедлайна
function setCountdown(day=12, hours=12, minutes=50, seconds=25) {
  var countDownDate = new Date()
  time = day*86400000 + hours*3600000 + minutes*60000 + seconds*1000
  countDownDate.setTime(countDownDate.getTime() + time)
  return countDownDate
};

// Указываем кастомные значения даты
countDownDate = setCountdown()

// Запуск таймера
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? 0+''+ seconds : seconds

  $('.sell-timer .timer-days').text(days)
  $('.sell-timer .timer-hours').text(hours)
  $('.sell-timer .timer-minutes').text(minutes)
  $('.sell-timer .timer-seconds').text(seconds)

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$('.timer').after(`<div class="sell-timer">
                  <span class='timer-days'></span>
                  <span class='timer-hours'></span>
                  <span class='timer-minutes'></span>
                  <span class='timer-seconds'></span>
                  </div>`)


});
