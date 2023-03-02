
// footer code from https://codepen.io/whins/pen/mPBREq
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('footer').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('footer').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('footer').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// CONTENT GRID
let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
    {
      "title" : "Halo Halo",
      "picture_url" : "gifs/halohalo.gif",
      "link" : "html/halo-halo.html",
      "category" : "Web Dev",
    },
    {
      "title" : "For Your Viewing Pleasure",
      "picture_url" : "gifs/foryour.gif",
      "link" : "html/for-your-viewing-pleasure.html",
       "category" : "Web Dev",
    },
    {
      "title" : "光 / Licht / Light",
      "picture_url" : "gifs/light.gif",
      "link" : "html/light.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Mecha Mecca",
      "picture_url" : "gifs/mecha.gif",
      "link" : "html/mechamecca.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Loop Wellness",
      "picture_url" : "gifs/loop.gif",
      "link" : "html/loop-wellness.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Speggtators",
      "picture_url" : "gifs/speggtators.gif",
      "link" : "html/speggtators.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Real Time Weather App",
      "picture_url" : "gifs/weatherapp.gif",
      "link" : "html/weather-app.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Wheel of Songs",
      "picture_url" : "gifs/wheelofsongs.gif",
      "link" : "html/wheel-of-songs.html",
      "category" : "Web Dev",
    },
    {
      "title" : "Puddle Study",
      "picture_url" : "gifs/puddlestudy.gif",
      "link" : "html/puddle-study.html",
      "category" : "Web Dev",
    },
    {
        "title" : "Self Portrait Stamp",
        "picture_url" : "gifs/stamp.gif",
        "link" : "html/portrait-stamp.html",
        "category" : "Creative Code",
    },
    {
        "title" : "Webcam Waterfall",
        "picture_url" : "gifs/waterfall.gif",
        "link" : "html/webcam-waterfall.html",
        "category" : "Creative Code",
    },
    {
      "title" : "If I Smushed My Face Into a Van Gogh",
      "picture_url" : "gifs/smushed.gif",
      "link" : "html/if-i-smushed-my-face.html",
      "category" : "Creative Code",
    },
    // {
    //   "title" : "Legumes and Portraits",
    //   "picture_url" : "gifs/legumes.gif",
    //   "category" : "Creative Code",
    // },
    // {
    //   "title" : "Puddle Boot Case Study",
    //   "picture_url" : "gifs/bottega.gif",
    //   "category" : "Creative Code",
    // },
    {
      "title" : "Bong Bong and Bongs",
      "picture_url" : "gifs/bongs.gif",
      "link" : "html/bong-bong-bongs.html",
      "category" : "Creative Code",
    },
    {
      "title" : "MAIA App",
      "picture_url" : "gifs/maia.gif",
      "link" : "html/maia.html",
      "category" : "UI/UX",
    },
    {
      "title" : "WTF (What the Font)",
      "picture_url" : "gifs/wtf.gif",
      "link" : "html/wtf.html",
      "category" : "UI/UX",
    },
    {
      "title" : "IRIS",
      "picture_url" : "gifs/iris.gif",
      "link" : "html/iris.html",
      "category" : "Service Design",
    },
    {
      "title" : "Summer of '93",
      "picture_url" : "gifs/summer.gif",
      "link" : "html/summer-of-93.html",
      "category" : "Motion Graphics",
    },
    {
      "title" : "Freddie Juggling Through Paris",
      "picture_url" : "gifs/freddie.gif",
      "link" : "html/freddie.html",
      "category" : "Motion Graphics",
    }
]
  
for (var i = 0; i < jsonDatabase.length; i++ ) {
    createElementProper(jsonDatabase[i]);
}
  
// APPEND //
function createElementProper(incomingJSON) {
let newContentElement = document.createElement("DIV");

// ADD TITLE //
let newContentHeading = document.createElement("H3");
newContentHeading.style.rotate = "24.82deg";
newContentHeading.style.paddingBottom = "2%";
newContentHeading.style.textAlign = "center";

newContentHeading.innerHTML = "<a href='" + incomingJSON['link'] + "'>" + incomingJSON['title'] + "</a>";
newContentElement.appendChild(newContentHeading);

// change color on mouseover
newContentHeading.addEventListener("mouseover", function(){
    newContentHeading.style.color = "rgb(5, 38, 255)";
    newContentSubheading.style.transform = "scale(1.2)";
    newContentHeading.style.transition = "0.5s";
})
newContentHeading.addEventListener("mouseout", function(){
    newContentHeading.style.color = "black";
    newContentSubheading.style.transform = "scale(1)";
})
  
// ADD IMAGES //
let newImage = document.createElement("IMG");
newImage.classList.add("profilePicture");
newImage.style.rotate = "24.82deg";
newImage.style.width = "100%";
newImage.style.boxShadow = "10px 10px 5px #ccc";

newImage.src = incomingJSON['picture_url'];
newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);
// rotate images on mouseover
newImage.addEventListener("mouseover", function(){
    newImage.style.transform = "rotate3d(-1, 1, 0, 45deg)";
    newImage.style.transition = "1s";
})
newImage.addEventListener("mouseout", function(){
    newImage.style.transform = "rotate3d(0, 0, 0, 0deg)";
})
  
// ADD CATEGORY //
let newContentSubheading = document.createElement("H5");
newContentSubheading.style.rotate = "24.82deg";
newContentSubheading.style.textAlign = "left";

newContentSubheading.innerHTML = incomingJSON['category'];
newContentElement.appendChild(newContentSubheading);
// change color on mouseover
newContentSubheading.addEventListener("mouseover", function(){
    newContentSubheading.style.color = "rgb(2, 29, 207)";
    newContentSubheading.style.transform = "scale(1.2)";
    newContentSubheading.style.transition = "1s";
})
newContentSubheading.addEventListener("mouseout", function(){
    newContentSubheading.style.color = "black";
    newContentSubheading.style.transform = "scale(1)";
})
}

