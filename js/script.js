// CONTENT GRID
let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
  {
    "title" : "The 33rd Team",
    "picture_url" : "gifs/33rd.gif",
    "link" : "html/33rd.html",
    "category" : "Web Dev",
    "description": "[2023]",
  },
  {
    "title" : "Halo Halo",
    "picture_url" : "gifs/halohalo.gif",
    "link" : "html/halo-halo.html",
    "category" : "Web Dev",
    "description": "[2021]",
  },
  {
    "title" : "G7 Entertainment Marketing",
    "picture_url" : "gifs/g7.gif",
    "link" : "html/g7.html",
    "category" : "Web Dev",
    "description": "[2023]",
  },
  {
    "title" : "Stampede Ventures",
    "picture_url" : "gifs/stampede.gif",
    "link" : "html/stampede.html",
    "category" : "Web Dev",
    "description": "[2023]",
  },
  {
    "title" : '"For Your Viewing Pleasure"',
    "picture_url" : "gifs/foryour.gif",
    "link" : "html/for-your-viewing-pleasure.html",
     "category" : "Web Dev",
     "description": "[2020]",
  },
  {
    "title" : "Stillwell's",
    "picture_url" : "gifs/stillwells.gif",
    "link" : "html/stillwells.html",
    "category" : "Web Dev",
    "description": "[2023]",
  },
  {
    "title" : "光 / Licht / Light",
    "picture_url" : "gifs/light.gif",
    "link" : "html/light.html",
    "category" : "Web Dev",
    "description": "[2022]",
  },
  {
    "title" : "Babou's",
    "picture_url" : "gifs/babous.gif",
    "link" : "html/babous.html",
    "category" : "Web Dev",
    "description": "[2023]",
  },
    // {
    //   "title" : "Megumi Organics",
    //   "picture_url" : "gifs/megumi.gif",
    //   "link" : "html/megumi-organics.html",
    //   "category" : "Web Dev · Design",
    // },
    // {
    //   "title" : "You Are Invited to Breakup",
    //   "picture_url" : "gifs/breakup.png",
    //   "link" : "html/you-are-invited-to-breakup.html",
    //   "category" : "Web Dev · Design",
    // },
    {
      "title" : "Mecha Mecca",
      "picture_url" : "gifs/mecha.gif",
      "link" : "html/mechamecca.html",
      "category" : "Web Dev",
      "description": "[2023]",
    },
    // {
    //   "title" : "Loop Wellness",
    //   "picture_url" : "gifs/loop.gif",
    //   "link" : "html/loop-wellness.html",
    //   "category" : "Web Dev",
    //   "description": "A website that delves into example lorem ipsum...",
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
        "description": "[2022]",
    },
    {
        "title" : "Webcam Waterfall",
        "picture_url" : "gifs/waterfall.gif",
        "link" : "html/webcam-waterfall.html",
        "category" : "Creative Code",
        "description": "[2022]",
    },
    {
      "title" : "If I Smushed My Face Into a Van Gogh",
      "picture_url" : "gifs/smushed.gif",
      "link" : "html/if-i-smushed-my-face.html",
      "category" : "Creative Code",
      "description": "[2021]",
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
      "description": "[2023]",
    },
    // {
    //   "title" : "MAIA App",
    //   "picture_url" : "gifs/maia.gif",
    //   "link" : "html/maia.html",
    //   "category" : "UI/UX",
    //   "description": "A website that delves into example lorem ipsum...",
    // },
    // {
    //   "title" : "IRIS",
    //   "picture_url" : "gifs/iris.gif",
    //   "link" : "html/iris.html",
    //   "category" : "UI/UX",
    //   "description": "A website that delves into example lorem ipsum...",
    // },
    {
      "title" : "Summer of '93",
      "picture_url" : "gifs/summer.gif",
      "link" : "html/summer-of-93.html",
      "category" : "Motion Graphics",
      "description": "[2021]",
    },
    {
      "title" : "Freddie Juggling Through Paris",
      "picture_url" : "gifs/freddie.gif",
      "link" : "html/freddie.html",
      "category" : "Motion Graphics",
      "description": "[2021]",
    },
    {
      "title" : "WTF (What the Font)",
      "picture_url" : "gifs/wtf.gif",
      "link" : "html/wtf.html",
      "category" : "UI/UX",
      "description": "[2021]",
    }
]
  
for (var i = 0; i < jsonDatabase.length; i++ ) {
    createElementProper(jsonDatabase[i]);
}
  
// APPEND //
function createElementProper(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.className = "project";
  
  // ADD TITLE AND CATEGORY CONTAINER //
  let titleContainer = document.createElement("div");
  titleContainer.style.display = "flex";
  // titleContainer.style.justifyContent = "end";
  titleContainer.style.marginBottom = "1rem";
  titleContainer.style.textAlign = "center";
  newContentElement.appendChild(titleContainer);

  // ADD CATEGORY //
  let newContentHeading = document.createElement("H5");
  newContentHeading.className = "project-category";
  // newContentHeading.style.textAlign = "right";
  newContentHeading.textContent = incomingJSON['category'];
  titleContainer.appendChild(newContentHeading);

  let dot = document.createElement("SPAN");
  dot.className = "dot";
  titleContainer.appendChild(dot);

  // ADD DESCRIPTION //
  // let newContentDescription = document.createElement("p");
  // newContentDescription.className = "project-description";
  // newContentDescription.style.textAlign = "left";
  // newContentDescription.textContent = incomingJSON['description'];
  // titleContainer.appendChild(newContentDescription);
    
  // ADD IMAGES //
  let newImage = document.createElement("IMG");
  newImage.classList.add("profilePicture");
  newImage.style.borderRadius = "5px";
  
  // ADD LINK //
  newImage.src = incomingJSON['picture_url'];
  let imageLink = document.createElement("a");
  imageLink.href = incomingJSON['link'];
  imageLink.appendChild(newImage);
  newContentElement.appendChild(imageLink);
  
  contentGridElement.appendChild(newContentElement);

  let contentLink = document.createElement("a");
  contentLink.href = incomingJSON['link'];
  contentLink.appendChild(newContentElement);
  contentGridElement.appendChild(contentLink);

  // ADD TITLE //
  let newContentSubheading = document.createElement("H3");
  newContentSubheading.className = "project-title";
  // newContentSubheading.style.textAlign = "right";
  newContentSubheading.textContent = incomingJSON['title'];
  newContentElement.appendChild(newContentSubheading);

  function storeScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  }

// NAV BAR
  const all = document.getElementById("all");
  all.addEventListener("click", lahat);

  function lahat() {
    showAllElements();
    removeActiveClassFromAll();
    all.className = "active";
  }

  const websites = document.getElementById("websites");
  websites.addEventListener("click", web);

  function web() {
    filterElementsByCategory('Web Dev');
    removeActiveClassFromAll();
    websites.className = "active";
  }

  const creativecode = document.getElementById("creativecode");
  creativecode.addEventListener("click", code);

  function code() {
    filterElementsByCategory('Creative Code');
    removeActiveClassFromAll();
    creativecode.className = "active";
  }

  const motiongraphics = document.getElementById("motiongraphics");
  motiongraphics.addEventListener("click", motion);

  function motion() {
    filterElementsByCategory('Motion Graphics');
    removeActiveClassFromAll();
    motiongraphics.className = "active";
  }

  const ui = document.getElementById("ui");
  ui.addEventListener("click", uiux);

  function uiux() {
    filterElementsByCategory('UI/UX');
    removeActiveClassFromAll();
    ui.className = "active";
  }

  function showAllElements() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      const contentLink = project.closest('a');
      project.style.visibility = 'visible';
      contentLink.classList.remove('hidden');
    });
  }

  function removeActiveClassFromAll() {
    all.className = "";
    websites.className = "";
    creativecode.className = "";
    motiongraphics.className = "";
    ui.className = "";
  }
  
  function filterElementsByCategory(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      const projectCategory = project.querySelector('.project-category').textContent;
      const contentLink = project.closest('a'); 
      
      if (projectCategory === category) {
        contentLink.classList.remove('hidden');
      } else {
        contentLink.classList.add('hidden');
      }
    });
  }
  
  
}



