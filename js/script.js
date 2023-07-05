// CONTENT GRID
let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
    {
      "title" : "Megumi Organics",
      "picture_url" : "gifs/megumi.gif",
      "link" : "html/megumi-organics.html",
      "category" : "Web Dev · Design",
    },
    // {
    //   "title" : "You Are Invited to Breakup",
    //   "picture_url" : "gifs/breakup.png",
    //   "link" : "html/you-are-invited-to-breakup.html",
    //   "category" : "Web Dev · Design",
    // },
    {
      "title" : "Halo Halo",
      "picture_url" : "gifs/halohalo.gif",
      "link" : "html/halo-halo.html",
      "category" : "Web Dev · Design",
    },
    {
      "title" : "For Your Viewing Pleasure",
      "picture_url" : "gifs/foryour.gif",
      "link" : "html/for-your-viewing-pleasure.html",
       "category" : "Web Dev · Design",
    },
    {
      "title" : "光 / Licht / Light",
      "picture_url" : "gifs/light.gif",
      "link" : "html/light.html",
      "category" : "Web Dev · Design",
    },
    {
      "title" : "Mecha Mecca",
      "picture_url" : "gifs/mecha.gif",
      "link" : "html/mechamecca.html",
      "category" : "Web Dev · Design",
    },
    {
      "title" : "Loop Wellness",
      "picture_url" : "gifs/loop.gif",
      "link" : "html/loop-wellness.html",
      "category" : "Web Dev · Design",
    },
    // {
    //   "title" : "Speggtators",
    //   "picture_url" : "gifs/speggtators.gif",
    //   "link" : "html/speggtators.html",
    //   "category" : "Web Dev",
    // },
    // {
    //   "title" : "Real Time Weather App",
    //   "picture_url" : "gifs/weatherapp.gif",
    //   "link" : "html/weather-app.html",
    //   "category" : "Web Dev",
    // },
    // {
    //   "title" : "Wheel of Songs",
    //   "picture_url" : "gifs/wheelofsongs.gif",
    //   "link" : "html/wheel-of-songs.html",
    //   "category" : "Web Dev · Design",
    // },
    // {
    //   "title" : "Puddle Study",
    //   "picture_url" : "gifs/puddlestudy.gif",
    //   "link" : "html/puddle-study.html",
    //   "category" : "Web Dev · Design",
    // },
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
      "category" : "UI/UX",
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
  newContentElement.style.rotate = "5deg";
  
  // ADD TITLE AND CATEGORY CONTAINER //
  let titleContainer = document.createElement("div");
  titleContainer.style.display = "flex";
  // titleContainer.style.width = "85%";
  titleContainer.style.justifyContent = "space-between";
  titleContainer.style.alignItems = "center";
  titleContainer.style.textAlign = "center";
  
  // ADD TITLE //
  let newContentHeading = document.createElement("H3");
  newContentHeading.style.textAlign = "left";
  newContentHeading.textContent = incomingJSON['title'];
  titleContainer.appendChild(newContentHeading);
  
  // ADD CATEGORY //
  let newContentSubheading = document.createElement("H5");
  newContentSubheading.style.textAlign = "right";
  newContentSubheading.textContent = incomingJSON['category'];
  titleContainer.appendChild(newContentSubheading);
  
  newContentElement.appendChild(titleContainer);
    
  // ADD IMAGES //
  let newImage = document.createElement("IMG");
  newImage.classList.add("profilePicture");
  newImage.style.width = "85%";
  newImage.style.boxShadow = "5px 5px 5px #ccc";
  
  newImage.src = incomingJSON['picture_url'];
  
  let imageLink = document.createElement("a");
  imageLink.href = incomingJSON['link'];
  imageLink.appendChild(newImage);
  newContentElement.appendChild(imageLink);
  
  contentGridElement.appendChild(newContentElement);
  
  // rotate images on mouseover
  newImage.addEventListener("mouseover", function(){
      newImage.style.transform = "rotate3d(-1, 1, 0, 45deg)";
      newImage.style.transition = "1s";
  })
  newImage.addEventListener("mouseout", function(){
      newImage.style.transform = "rotate3d(0, 0, 0, 0deg)";
  })

// NAV BAR
const all = document.getElementById("all");
all.addEventListener("click", lahat);

function lahat() {
  newContentHeading.style.display = 'block';
  newImage.style.removeProperty('display');
  newImage.style.verticalAlign = 'top';
  newContentSubheading.style.display = 'block';
  newContentSubheading.style.paddingTop = '0'
}

  const websites = document.getElementById("websites");
  websites.addEventListener("click", web);

  function web() {
    if (incomingJSON['category'] === 'Creative Code' || incomingJSON['category'] === 'Motion Graphics' || incomingJSON['category'] === 'UI/UX') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.removeProperty('display');
      newImage.style.verticalAlign = 'top';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '0'
    }
  }

  const creativecode = document.getElementById("creativecode");
  creativecode.addEventListener("click", code);

  function code() {
    if (incomingJSON['category'] === 'Web Dev · Design' || incomingJSON['category'] === 'Motion Graphics' || incomingJSON['category'] === 'UI/UX') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.removeProperty('display');
      newImage.style.verticalAlign = 'top';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '0'
      // contentGridElement.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
  }

  const motiongraphics = document.getElementById("motiongraphics");
  motiongraphics.addEventListener("click", motion);

  function motion() {
    if (incomingJSON['category'] === 'Web Dev · Design' || incomingJSON['category'] === 'Creative Code' || incomingJSON['category'] === 'UI/UX') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.removeProperty('display');
      newImage.style.verticalAlign = 'top';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '0'
    }
  }

  const ui = document.getElementById("ui");
  ui.addEventListener("click", uiux);

  function uiux() {
    if (incomingJSON['category'] === 'Web Dev · Design' || incomingJSON['category'] === 'Creative Code' || incomingJSON['category'] === 'Motion Graphics') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.removeProperty('display');
      newImage.style.verticalAlign = 'top';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '0'
    }
  }
}



