// CONTENT GRID
let contentGridElement = document.getElementById('contentGrid');
  
let jsonDatabase = [
  {
    "title" : "Jason Schmidt",
    "picture_url" : "gifs/jasonschmidt.gif",
    "link" : "html/jasonschmidt.html",
    "category" : "( Client Work )",
    "description": "A dynamic digital portfolio showcasing Jason Schmidt, an independent music artist and actor featured in the Tony Award-winning musical, The Outsiders.",
  },
  {
    "title" : "Sofia Yulo Fine Jewelry",
    "picture_url" : "gifs/syfj.gif",
    "link" : "html/syfj.html",
    "category" : "( Client Work )",
    "description": "A Manila-based fine jewelry designer known for creating timeless pieces that celebrate legacy and craftsmanship.",
  },
  {
    "title" : "SUMMIT",
    "picture_url" : "gifs/summit.gif",
    "link" : "html/summit.html",
    "category" : "( Client Work )",
    "description": "A platform united by a shared commitment to cultural representation and lifelong learning.",
  },
  {
    "title" : "MAYUMI",
    "picture_url" : "gifs/mayumi.gif",
    "link" : "html/mayumi.html",
    "category" : "( Client Work )",
    "description": "An e-commerce site for my jewelry brand MAYUMI—bringing forth the beauty of natural gemstones, driven by the new generation.",
  },
  {
    "title" : "光 / Licht / Light",
    "picture_url" : "gifs/light.gif",
    "link" : "html/light.html",
    "category" : "( Web Dev )",
    "description": "A data visualization of Hong Kong and Amsterdam's usage of light, and how they can be compared and contrasted from a digital distance.",
  },
  {
    "title" : "Summer of '93",
    "picture_url" : "gifs/summer.gif",
    "link" : "html/summer-of-93.html",
    "category" : "( Motion Graphics )",
    "description": "Featuring my father Kenny Rogers in the Summer of '93.",
  },
  {
    "title" : "Webcam Waterfall",
    "picture_url" : "gifs/waterfall.gif",
    "link" : "html/webcam-waterfall.html",
    "category" : "( Creative Code )",
    "description": "An interactive self-portrait, in which the user can click to produce their waterfall portrait.",
},
  {
    "title" : "The 33rd Team",
    "picture_url" : "gifs/33rd.gif",
    "link" : "html/33rd.html",
    "category" : "( Client Work )",
    "description": "Bringing fans closer to the game.",
  },
  {
    "title" : "Halo Halo",
    "picture_url" : "gifs/halohalo.gif",
    "link" : "html/halo-halo.html",
    "category" : "( Web Dev )",
    "description": "A 3D website that pays homage to the emblematic Filipino dessert, the halo-halo.",
  },
  {
    "title" : '"For Your Viewing Pleasure"',
    "picture_url" : "gifs/foryour.gif",
    "link" : "html/for-your-viewing-pleasure.html",
     "category" : "( Web Dev )",
     "description": "A comprehensive film directory showcasing my favorite movies from the quarantine era of 2020.",
  },
  {
    "title" : "Mecha Mecca",
    "picture_url" : "gifs/mecha.gif",
    "link" : "html/mechamecca.html",
    "category" : "( Web Dev )",
    "description": "An immersive marketplace designed for your digital garden.",
  },
  {
    "title" : "G7 Entertainment Marketing",
    "picture_url" : "gifs/g7.gif",
    "link" : "html/g7.html",
    "category" : "( Client Work )",
    "description": "An agency that harnesses entertainment to create unforgettable brand experiences.",
  },
  {
    "title" : "You Are Invited to Breakup",
    "picture_url" : "gifs/breakup.png",
    "link" : "html/you-are-invited-to-breakup.html",
    "category" : "( Web Dev )",
    "description": "My NYU IDM Senior Thesis Project that touches on my personal experience living between analog and digital technologies, growing up in the early 2000's.",
  },
  {
    "title" : "Stampede Ventures",
    "picture_url" : "gifs/stampede.gif",
    "link" : "html/stampede.html",
    "category" : "( Client Work )",
    "description": "An independent entertainment media company that wholly focuses on creating the next generation of blockbuster franchises.",
  },
  {
    "title" : "Freddie Juggling Through Paris",
    "picture_url" : "gifs/freddie.gif",
    "link" : "html/freddie.html",
    "category" : "( Motion Graphics )",
    "description": "Featuring Freddie Mercury juggling a soccer ball through Paris.",
  },
  {
    "title" : "Megumi Organics",
    "picture_url" : "gifs/megumi.gif",
    "link" : "html/megumi-organics.html",
    "category" : "( Client Work )",
    "description": "Megumi Organics creates products made from 100% organic plants—no fillers, shortcuts, or half measures needed.",
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
        "category" : "( Creative Code )",
        "description": "An interactive self-portrait, in which the user can dictate the final visual result of my face.",
    },
    {
      "title" : "If I Smushed My Face Into a Van Gogh",
      "picture_url" : "gifs/smushed.gif",
      "link" : "html/if-i-smushed-my-face.html",
      "category" : "( Creative Code )",
      "description": "This is what smushing my face into a Van Gogh painting would look like.",
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
      "category" : "( Creative Code )",
      "description": "A satirical risograph project, likening Bong Bong Marcos to that of a bong.",
    },
    // {
    //     "title" : "Stillwell's",
    //     "picture_url" : "gifs/stillwells.gif",
    //     "link" : "html/stillwells.html",
    //     "category" : "( Client Work )",
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   },
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
    // {
    //   "title" : "WTF (What the Font)",
    //   "picture_url" : "gifs/wtf.gif",
    //   "link" : "html/wtf.html",
    //   "category" : "( UI/UX )",
    //   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //     "title" : "Babou's",
    //     "picture_url" : "gifs/babous.gif",
    //     "link" : "html/babous.html",
    //     "category" : "( Client Work )",
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   }
]

for (var i = 0; i < jsonDatabase.length; i++ ) {
    createElementProper(jsonDatabase[i], i);
  }
  
// APPEND //
function createElementProper(incomingJSON, index) {
  let newContentElement = document.createElement("DIV");
  newContentElement.className = "project";
  newContentElement.style.display = "flex";
  newContentElement.style.flexDirection = "row-reverse";
  newContentElement.style.justifyContent = "space-around";
  newContentElement.style.alignItems = "center";
  
  // ADD TITLE AND CATEGORY CONTAINER //
  let titleContainer = document.createElement("div");
  titleContainer.style.display = "flex";
  titleContainer.style.marginBottom = "1rem";
  titleContainer.style.textAlign = "center";
  newContentElement.appendChild(titleContainer);

  // ADD CATEGORY //
  let newContentHeading = document.createElement("H2");
  newContentHeading.className = "project-category";
  newContentHeading.textContent = incomingJSON['category'];
  titleContainer.appendChild(newContentHeading);
    
  // ADD IMAGES //
  let newImage = document.createElement("IMG");
  newImage.classList.add("profilePicture");
  newImage.style.width = "20rem";
  newImage.style.boxShadow = "4px 4px 4px rgb(0 0 0 / 0.2)";
  newImage.style.width = "332px";

  if (index % 2 === 0) {
    newImage.style.transform = "rotate(2deg)";
  } else {
    newImage.style.transform = "rotate(-2deg)";
  }
  
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

  let projectTitleContainer = document.createElement("div");
  projectTitleContainer.className = "project-container";

  // ADD TITLE //
  let newContentSubheading = document.createElement("H2");
  newContentSubheading.className = "project-title";
  newContentSubheading.textContent = incomingJSON['title'];
  projectTitleContainer.appendChild(newContentSubheading);

  // ADD DESCRIPTION //
  let newContentDescription = document.createElement("p");
  newContentDescription.className = "project-description";
  newContentDescription.style.fontSize = "1rem";
  newContentDescription.style.maxWidth = "20rem";
  newContentDescription.textContent = incomingJSON['description'];
  projectTitleContainer.appendChild(newContentDescription);

  newContentElement.appendChild(projectTitleContainer);


// FILTER
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
    filterElementsByCategory('( Web Dev )');
    removeActiveClassFromAll();
    websites.className = "active";
  }

  const creativecode = document.getElementById("creativecode");
  creativecode.addEventListener("click", code);

  function code() {
    filterElementsByCategory('( Creative Code )');
    removeActiveClassFromAll();
    creativecode.className = "active";
  }

  const motiongraphics = document.getElementById("clients");
  motiongraphics.addEventListener("click", motion);

  function motion() {
    filterElementsByCategory('( Client Work )');
    removeActiveClassFromAll();
    motiongraphics.className = "active";
  }

  const ui = document.getElementById("misc");
  ui.addEventListener("click", uiux);

  function uiux() {
    filterElementsByCategory('( Motion Graphics )' );
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