// Изменяет цвет фона при скроле header
$(function () {
  $(document).scroll(function () {
    let $nav = $(".header");
    $nav.toggleClass('animate-color', $(this).scrollTop() > $nav.height());
  });
});
// Изменяет цвет фона при скроле header





// Плавный скролл
$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		event.preventDefault(); //Убрать если нужна ссылка на другую страницу.
		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
// Плавный скролл






// Всплывающее окно при загрузке страницы
window.addEventListener('load', function(){
 setTimeout(
    function open(event){
      document.querySelector('.modal').style.display = 'block';
  },
  3000
  )
});
//Закрыть окно
document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.modal').style.display = 'none';
});
// Всплывающее окно при загрузке страницы