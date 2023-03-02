profile = document.getElementById("profile");
// profile.style.boxShadow = "10px 10px 5px #ccc";


// rotate images on mouseover
profile.addEventListener("mouseover", function(){
    profile.style.transform = "rotate(24.82deg)";
    profile.style.transition = "3s";
})
profile.addEventListener("mouseout", function(){
      profile.style.transform = "rotate(0deg)";
})

