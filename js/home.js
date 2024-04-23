// FEATURED ON HOMEPAGE
let contentGridHomeElement = document.querySelector('.contentGridHome');
  
let featuredDatabase = [
  {
    "title" : "光 / Licht / Light",
    "picture_url" : "gifs/light.gif",
    "link" : "html/light.html",
    "category" : "( Web Dev )",
    "description": "A data visualization of Hong Kong and Amsterdam's usage of light, and how they can be compared and contrasted from a digital distance.",
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
    "title" : "Self Portrait Stamp",
    "picture_url" : "gifs/stamp.gif",
    "link" : "html/portrait-stamp.html",
    "category" : "( Creative Code )",
     "description": "An interactive self-portrait, in which the user can dictate the final visual result of my face.",
  },
  {
    "title" : "Bong Bong and Bongs",
    "picture_url" : "gifs/bongs.gif",
    "link" : "html/bong-bong-bongs.html",
    "category" : "( Creative Code )",
    "description": "A satirical risograph project, likening Bong Bong Marcos to that of a bong.",
  },
]
  
for (var i = 0; i < featuredDatabase.length; i++ ) {
  createElementProperFeatured(featuredDatabase[i], i);
}
  
// APPEND //
function createElementProperFeatured(incomingJSON, index) {
  let newContentElementFeatured = document.createElement("DIV");
  newContentElementFeatured.className = "projectFeatured";
  newContentElementFeatured.style.display = "flex";
  newContentElementFeatured.style.flexDirection = "row-reverse";
  newContentElementFeatured.style.justifyContent = "space-around";
  newContentElementFeatured.style.alignItems = "center";
  
  // ADD TITLE AND CATEGORY CONTAINER //
  let titleContainerFeatured = document.createElement("div");
  titleContainerFeatured.style.display = "flex";
  titleContainerFeatured.style.marginBottom = "1rem";
  titleContainerFeatured.style.textAlign = "center";
  newContentElementFeatured.appendChild(titleContainerFeatured);

  // ADD CATEGORY //
  let newContentHeadingFeatured = document.createElement("H2");
  newContentHeadingFeatured.className = "project-category";
  newContentHeadingFeatured.textContent = incomingJSON['category'];
  titleContainerFeatured.appendChild(newContentHeadingFeatured);
    
  // ADD IMAGES //
  let newImageFeatured = document.createElement("IMG");
  newImageFeatured.classList.add("profilePicture");
  newImageFeatured.style.width = "20rem";
  newImageFeatured.style.boxShadow = "4px 4px 4px rgb(0 0 0 / 0.2)";
  newImageFeatured.style.width = "332px";

  if (index % 2 === 0) {
    newImageFeatured.style.transform = "rotate(2deg)";
  } else {
    newImageFeatured.style.transform = "rotate(-2deg)";
  }
  
  // ADD LINK //
  newImageFeatured.src = incomingJSON['picture_url'];
  let imageLinkFeatured = document.createElement("a");
  imageLinkFeatured.href = incomingJSON['link'];
  imageLinkFeatured.appendChild(newImageFeatured);
  newContentElementFeatured.appendChild(imageLinkFeatured);
  
  contentGridHomeElement.appendChild(newContentElementFeatured);

  let contentLinkFeatured = document.createElement("a");
  contentLinkFeatured.href = incomingJSON['link'];
  contentLinkFeatured.appendChild(newContentElementFeatured);
  contentGridHomeElement.appendChild(contentLinkFeatured);

  let titleContainer = document.createElement("div");
  titleContainer.className = "project-container";

  // ADD TITLE //
  let newContentSubheadingFeatured = document.createElement("H2");
  newContentSubheadingFeatured.className = "project-title";
  newContentSubheadingFeatured.textContent = incomingJSON['title'];
  titleContainer.appendChild(newContentSubheadingFeatured);

  // ADD DESCRIPTION //
  let newContentDescriptionFeatured = document.createElement("p");
  newContentDescriptionFeatured.className = "project-description";
  newContentDescriptionFeatured.style.fontSize = "1rem";
  newContentDescriptionFeatured.style.maxWidth = "20rem";
  newContentDescriptionFeatured.textContent = incomingJSON['description'];
  titleContainer.appendChild(newContentDescriptionFeatured);

  newContentElementFeatured.appendChild(titleContainer);
}



