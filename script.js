'use strict';

function handleThumbnailClicks() {
  
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    $('.hero img').attr('src', imgSrc);
  });
}


$(handleThumbnailClicks);