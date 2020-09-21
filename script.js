var card = document.querySelectorAll('.card');
card.forEach(function(userItem) {
  userItem.addEventListener( 'click', function() {
  userItem.classList.toggle('is-flipped');
});
})
