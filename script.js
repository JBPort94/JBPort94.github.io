//script.js
//Author: Jeff Porter
//Date: 2/17/2020
//CS 290 - 400
//Activity 5

// Test File

 

 

//REQUIRED FUNCTIONS
function buildList(){

                var listBody = document.createElement("ul");
                listBody.className = "noBullets";

                //Create items
                var firstItem = document.createElement("li");
                var secondItem = document.createElement("li");
                var thirdItem = document.createElement("li");
                var fourthItem = document.createElement("li");
                var lastItem = document.createElement("li");
                firstItem.textContent = "Backpacking/Hiking";
                secondItem.textContent = "Mountain Biking";
                thirdItem.textContent = "Fitness";
                fourthItem.textContent = "Fly Fishing";
                lastItem.textContent = "A lot more... it's kind of a hassle";

                //Append items
                listBody.appendChild(firstItem);
                listBody.appendChild(secondItem);
                listBody.appendChild(thirdItem);
                listBody.appendChild(fourthItem);
                listBody.appendChild(lastItem);

                return listBody;
}

function totalBuild(){
//PAGE BUILD
var mainContent = document.getElementById("mainContent");
var interestContainer = document.createElement("div");
interestContainer.className = "column";

var interestList = buildList();

var interestHeader = document.createElement("h3");
interestHeader.textContent = "My Personal Interests:"

var rightContainer = document.createElement("div");
rightContainer.className = "columnRight";

var rightContent = document.createElement("h3");
rightContent.textContent = "My Favorite Combo: Backpacking & Flyfishing";

//<iframe width="560" height="315" src="https://www.youtube.com/embed/FHrgT2vLjGY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
var rightVideo = document.createElement("iframe");
rightVideo.width = "560";
rightVideo.height = "315";
rightVideo.src = "https://www.youtube.com/embed/FHrgT2vLjGY";
rightVideo.frameborder = "0";

var rightContent2 = document.createElement("h3");
rightContent2.textContent = "Mountain Biking"

//<iframe width="560" height="315" src="https://www.youtube.com/embed/38g27GEuyn8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
var rightVideo2 = document.createElement("iframe");
rightVideo2.width = "560";
rightVideo2.height = "315";
rightVideo2.src = "https://www.youtube.com/embed/38g27GEuyn8";
rightVideo2.frameborder = "0";

//Appending all objects
interestContainer.appendChild(interestHeader);
interestContainer.appendChild(interestList);
rightContainer.appendChild(rightContent);
rightContainer.appendChild(rightVideo);
rightContainer.appendChild(rightContent2);
rightContainer.appendChild(rightVideo2);
mainContent.appendChild(interestContainer);
mainContent.appendChild(rightContainer);

//Remove listener so button can only be pressed once
document.getElementById("loadButton").removeEventListener("click", totalBuild);
}

document.getElementById("loadButton").addEventListener("click", totalBuild);