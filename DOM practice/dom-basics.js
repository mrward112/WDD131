const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from Picsum");
document.body.appendChild(newImage);

console.log("script is running"); //some debugging

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "this was also added through javascript";
newSection.appendChild(newP);

document.body.appendChild(newSection);

// const newSection = document.createElement("section");
// newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
// document.body.appendChild(newSection);