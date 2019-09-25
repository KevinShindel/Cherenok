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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

});
