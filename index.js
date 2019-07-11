'use strict';

$('.thumbnail').click(event => {
  const newSrc = $(event.target).attr('src');
  const newAlt = $(event.target).attr('alt');
  $('.hero img').attr('src', newSrc);
  $('.hero img').attr('alt', newAlt);
});
