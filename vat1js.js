let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById('background-music');
  const control = document.getElementById('music-control');

  // Sayfa yüklenince butona ilk tıklamada müzik başlasın
  control.addEventListener("click", function() {
      if (audio.paused) {
          audio.play();
          control.textContent = '🔊 Müziği Kapat';
      } else {
          audio.pause();
          control.textContent = '🔇 Müziği Aç';
      }
  });
});

        function closeNotification() {
            document.getElementById('notification').style.display = 'none';
        }


 document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });