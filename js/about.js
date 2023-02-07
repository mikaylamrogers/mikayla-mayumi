profile = document.getElementById("profile");

// rotate images on mouseover
profile.addEventListener("mouseover", function(){
    profile.style.transform = "rotate(360deg)";
    profile.style.transition = "3s";
})
profile.addEventListener("mouseout", function(){
      profile.style.transform = "rotate(0deg)";
})

// background gradient source code: https://codepen.io/lsammarco/pen/waMpJw
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #48db68, #e8a0bd, #f0eb5b)');
  });