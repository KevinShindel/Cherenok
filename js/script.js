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


$(document).ready(function() {

  // Карусель
  $('.news_carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="custom-next"></button>',
    prevArrow: '<button type="button" class="custom-prev"></button>'
  });

});
