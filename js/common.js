
$(document).ready(function(){

var $container = $(".masonry-container");
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});

 	lightbox.option({
      'albumLabel': "Картинка %1 из %2",
      'disableScrolling': true,
      'positionFromTop': 150
    });
});


