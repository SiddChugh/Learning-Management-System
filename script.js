// Get DOM objects by class name

var description_list = document.getElementsByClassName("close");
var image_list = document.getElementsByClassName("image");
var welcomeModal = document.getElementById("welcome-modal");

// Dictionary to keep track of image and their description pairs

var image_and_description_pairs = {
  "direct-supervisor-image": "direct-supervisor-modal",
  "co-worker-image": "co-worker-modal",
  "injured-image": "injured-modal",
  "physician-image": "physician-modal",
  "union-representative-image": "union-representative-modal",
  "insurance-provider-image": "insurance-provider-modal",
  "disability-case-management-professional-image": 
  "disability-case-management-professional-modal"
};

/*
-------------------------------------------------------------------------------
------------------------ Helper Functions -------------------------------------
-------------------------------------------------------------------------------
*/

var closeModal = function() {
  let current_modal = document.getElementById
                      (event.srcElement.parentElement.id);
  // Make modal invisible
  current_modal.style.display = "none";
  
  // Unblur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = "blur(0)";
  }
}

var openModal = function() {
  let current_modal = document.getElementById
                      (image_and_description_pairs[event.srcElement.id]);
  // Display modal
  current_modal.style.display = "block";

  // Blur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = "blur(8px)";
  }
}

var welcomeScreen = function() {
  // Display modal
  welcomeModal.style.display = "block";

  // Blur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = "blur(8px)";
  }
}

var closeWelcomeScreen = function() {
  // Make modal invisible
  welcomeModal.style.display = "none";
  
  // Unblur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = "blur(0)";
  }
}

// Initialize onClick behavior on DOM objects
for (var i = 0; i < description_list.length; ++i) {
  description_list[i].addEventListener('click', closeModal, false);
}

for (var i = 0; i < image_list.length; ++i) {
  image_list[i].addEventListener('click', openModal, false);
}
