// Get DOM objects by class name

var description_list = document.getElementsByClassName("close");

var image_list = document.getElementsByClassName("image");

/*
-------------------------------------------------------------------------------
------------------------ Helper Functions -------------------------------------
-------------------------------------------------------------------------------
*/

var closeModal = function() {
  var modal_list = document.querySelectorAll(".modal");

  modal_list.forEach(function (modal) {
    modal.style.display = "none";
  })

  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = "blur(0)";
  }
}

var openModal = function() {
  var modal_list = document.querySelectorAll(".modal");

  modal_list.forEach(function (modal) {
    modal.style.display = "block";
  })

  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = "blur(8px)";
  }
}

// Initialize onClick behavior on DOM objects
for (var i = 0; i < description_list.length; ++i) {
  description_list[i].addEventListener('click', closeModal, false);
}

for (var i = 0; i < image_list.length; ++i) {
  image_list[i].addEventListener('click', openModal, false);
}
