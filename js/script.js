// CONTENT GRID
let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
    {
      "title" : "Megumi Organics",
      "picture_url" : "pngs/megumi.png",
      "link" : "html/megumi-organics.html",
      "category" : "DEVELOPMENT · DESIGN",
    },
    {
      "title" : "光 / Licht / Light",
      "picture_url" : "pngs/light.png",
      "link" : "html/light.html",
      "category" : "DEVELOPMENT · DESIGN",
    },
    {
      "title" : "Mecha Mecca",
      "picture_url" : "pngs/mecha.png",
      "link" : "html/mechamecca.html",
      "category" : "DEVELOPMENT · DESIGN",
    },
    {
      "title" : "For Your Viewing Pleasure",
      "picture_url" : "pngs/for.png",
      "link" : "html/for-your-viewing-pleasure.html",
       "category" : "DEVELOPMENT · DESIGN",
    },
    {
      "title" : "Webcam Waterfall",
      "picture_url" : "pngs/waterfall.png",
      "link" : "html/webcam-waterfall.html",
      "category" : "Creative Code",
  },
    {
      "title" : "Halo Halo",
      "picture_url" : "pngs/halo.png",
      "link" : "html/halo-halo.html",
      "category" : "DEVELOPMENT · DESIGN",
    },
    // {
    //   "title" : "You Are Invited to Breakup",
    //   "picture_url" : "gifs/breakup.png",
    //   "link" : "html/you-are-invited-to-breakup.html",
    //   "category" : "DEVELOPMENT · DESIGN",
    // },
    // {
    //   "title" : "Loop Wellness",
    //   "picture_url" : "gifs/loop.gif",
    //   "link" : "html/loop-wellness.html",
    //   "category" : "Web Dev",
    // },
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
    //   "category" : "Web Dev",
    // },
    // {
    //   "title" : "Puddle Study",
    //   "picture_url" : "gifs/puddlestudy.gif",
    //   "link" : "html/puddle-study.html",
    //   "category" : "Web Dev",
    // },
    {
        "title" : "Self Portrait Stamp",
        "picture_url" : "pngs/stamp.png",
        "link" : "html/portrait-stamp.html",
        "category" : "Creative Code",
    },
    // {
    //   "title" : "If I Smushed My Face Into a Van Gogh",
    //   "picture_url" : "gifs/smushed.gif",
    //   "link" : "html/if-i-smushed-my-face.html",
    //   "category" : "Creative Code",
    // },
    // {
    //   "title" : "Legumes and Portraits",
    //   "picture_url" : "gifs/legumes.gif",
    //   "category" : "Creative Code",
    // },
    // {
    //   "title" : "Bong Bong and Bongs",
    //   "picture_url" : "gifs/bongs.gif",
    //   "link" : "html/bong-bong-bongs.html",
    //   "category" : "Creative Code",
    // },
    // {
    //   "title" : "MAIA App",
    //   "picture_url" : "gifs/maia.gif",
    //   "link" : "html/maia.html",
    //   "category" : "UI/UX",
    // },
    // {
    //   "title" : "WTF (What the Font)",
    //   "picture_url" : "gifs/wtf.gif",
    //   "link" : "html/wtf.html",
    //   "category" : "UI/UX",
    // },
    // {
    //   "title" : "IRIS",
    //   "picture_url" : "gifs/iris.gif",
    //   "link" : "html/iris.html",
    //   "category" : "UI/UX",
    // },
    {
      "title" : "Summer of '93",
      "picture_url" : "pngs/summer.png",
      "link" : "html/summer-of-93.html",
      "category" : "Motion Design",
    }
    // {
    //   "title" : "Freddie Juggling Through Paris",
    //   "picture_url" : "gifs/freddie.gif",
    //   "link" : "html/freddie.html",
    //   "category" : "Motion Design",
    // }
]
  
for (var i = 0; i < jsonDatabase.length; i++ ) {
    createElementProper(jsonDatabase[i]);
}
  
// APPEND //
function createElementProper(incomingJSON) {
let newContentElement = document.createElement("DIV");

// ADD TITLE AND CATEGORY CONTAINER //
let titleContainer = document.createElement("div");
titleContainer.style.display = "flex";
titleContainer.style.justifyContent = "space-between";
titleContainer.style.alignItems = "center";

// ADD TITLE //
let newContentHeading = document.createElement("H3");
newContentHeading.style.textAlign = "left";
newContentHeading.textContent = incomingJSON['title'];
titleContainer.appendChild(newContentHeading);

// ADD CATEGORY //
let newContentSubheading = document.createElement("H5");
newContentSubheading.style.textAlign = "center";
newContentSubheading.textContent = incomingJSON['category'];
titleContainer.appendChild(newContentSubheading);

newContentElement.appendChild(titleContainer);
  
// ADD IMAGES //
let newImage = document.createElement("IMG");
newImage.classList.add("profilePicture");
newImage.style.width = "100%";
// newImage.style.height = "80%";
// newImage.style.boxShadow = "5px 5px 5px #ccc";

// newImage.innerHTML = "<a href='" + incomingJSON['link'] + "'>" + "<img src='" + incomingJSON['picture_url'] + "'>" + "</a>";
newImage.src = incomingJSON['picture_url'];

let imageLink = document.createElement("a");
imageLink.href = incomingJSON['link'];
imageLink.appendChild(newImage);
newContentElement.appendChild(imageLink);

// newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);

// rotate images on mouseover
newImage.addEventListener("mouseover", function(){
    // newImage.style.transform = "rotate3d(-1, 1, 0, 45deg)";
    newImage.style.transition = "1s";
})
newImage.addEventListener("mouseout", function(){
    // newImage.style.transform = "rotate3d(0, 0, 0, 0deg)";
})


// NAV BAR
const all = document.getElementById("all");
all.addEventListener("click", lahat);

function lahat() {
    newContentHeading.style.display = 'block';
    newImage.style.display = 'block';
    newContentSubheading.style.display = 'block';
    newContentSubheading.style.paddingTop = '2%';
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
      newImage.style.display = 'block';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '2%';
    }
  }

  const creativecode = document.getElementById("creativecode");
  creativecode.addEventListener("click", code);

  function code() {
    if (incomingJSON['category'] === 'Web Dev' || incomingJSON['category'] === 'Web Dev · Freelance' || incomingJSON['category'] === 'Motion Graphics' || incomingJSON['category'] === 'UI/UX') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.display = 'block';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '2%';
      // contentGridElement.style.gridTemplateColumns = "repeat(3, 1fr)";

    }
  }

  const motiongraphics = document.getElementById("motiongraphics");
  motiongraphics.addEventListener("click", motion);

  function motion() {
    if (incomingJSON['category'] === 'Web Dev' || incomingJSON['category'] === 'Web Dev · Freelance' || incomingJSON['category'] === 'Creative Code' || incomingJSON['category'] === 'UI/UX') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.display = 'block';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '2%';
    }
  }

  const ui = document.getElementById("ui");
  ui.addEventListener("click", uiux);

  function uiux() {
    if (incomingJSON['category'] === 'Web Dev' || incomingJSON['category'] === 'Web Dev · Freelance' || incomingJSON['category'] === 'Creative Code' || incomingJSON['category'] === 'Motion Graphics') {
      newContentHeading.style.display = 'none';
      newImage.style.display = 'none';
      newContentSubheading.style.display = 'none';
    } else {
      newContentHeading.style.display = 'block';
      newImage.style.display = 'block';
      newContentSubheading.style.display = 'block';
      newContentSubheading.style.paddingTop = '2%';
    }
  }
}



