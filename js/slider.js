var slideIndex = 1;
var timer
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}   

var videoSlideIndex = 1;
showVideoSlides(videoSlideIndex);

function plusVideoSlides(k) {
  showVideoSlides(videoSlideIndex += k);
}

function currentVideoSlide(k) {
  showVideoSlides(videoSlideIndex = k);
}

function showVideoSlides(k) {
  var j;
  var vSlides = document.getElementsByClassName("myVideoSlides");
  var vDots = document.getElementsByClassName("videoDot");
  if (k > vSlides.length) {videoSlideIndex = 1}    
  if (k < 1) {videoSlideIndex = vSlides.length}
  for (j = 0; j < vSlides.length; j++) {
      vSlides[j].style.display = "none";  
  }
  for (j = 0; j < vDots.length; j++) {
      vDots[j].className = vDots[j].className.replace(" active", "");
  }
  vSlides[videoSlideIndex-1].style.display = "block";  
  vDots[videoSlideIndex-1].className += " active";
}   