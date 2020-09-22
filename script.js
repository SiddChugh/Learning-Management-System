// Get DOM objects

var description_list = document.getElementsByClassName("close");
var image_list = document.getElementsByClassName("image");

var welcomeModal = document.getElementById("welcome-modal");
var quizModal = document.getElementById("quiz-modal");

var quiz_button = document.getElementById("quiz-button");

// DOM properties constants
const no_blur = "blur(0)";
const blur_severity = "blur(8px)";

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

var closeDescriptionModal = function() {
  let current_modal = document.getElementById
                      (event.srcElement.parentElement.id);
  // Make modal invisible
  current_modal.style.display = "none";
  
  // Unblur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = no_blur;
    image_list[i].style.pointerEvents = "auto";
  }

  // Display quiz button
  quiz_button.style.display = "block";
}

var openDescriptionModal = function() {
  let current_modal = document.getElementById
                      (image_and_description_pairs[event.srcElement.id]);
  // Display modal
  current_modal.style.display = "block";

  // Blur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = blur_severity;
    image_list[i].style.pointerEvents = "none";
  }

  // Hide quiz button
  quiz_button.style.display = "none";
}

var openWelcomeModal = function() {
  // Display modal
  welcomeModal.style.display = "block";

  // Blur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = blur_severity;
    image_list[i].style.pointerEvents = "none";
  }

  // Hide quiz button
  quiz_button.style.display = "none";
}

var closeWelcomeModal = function() {
  // Make modal invisible
  welcomeModal.style.display = "none";
  
  // Unblur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = no_blur;
     image_list[i].style.pointerEvents = "auto";
  }

  // Display quiz button
  quiz_button.style.display = "block";
}

var openQuizModal = function() {
  // Display modal
  quizModal.style.display = "block";

  // Blur images
  for (var i = 0; i < image_list.length; ++i) {
    image_list[i].style.filter = blur_severity;
  }

  // Hide quiz button
  quiz_button.style.display = "none";
}

// Initialize onClick behavior on DOM objects
for (var i = 0; i < description_list.length; ++i) {
  description_list[i].addEventListener('click', closeDescriptionModal, false);
}

for (var i = 0; i < image_list.length; ++i) {
  image_list[i].addEventListener('click', openDescriptionModal, false);
}
