function rngColor() {
	var letters = "ABCDF0123456789".split("");
	
	rng = []
	for (i=0; i < 6; i++) {
		random = Math.floor(Math.random() * 10);
		rng.push(letters[random]);
	}
	rng = "#" + rng.join("");
	return rng;
}

var i = 1; 
var squareCount = 16;

function newGrid(squareCount) {
	
	var container = document.createElement("div");
	squareCount = squareCount * squareCount

	container.setAttribute("class", "square-container");

	var track = [];
	squareIndex = 0;
	for (var i=1; i <= squareCount; i++) { 
		var square = document.createElement("div");
		squareIndex++;
		square.setAttribute("class", "square")
		square.setAttribute("id", "'" + squareIndex + "'");
		size = (400 / Math.sqrt(squareCount)) - 2;
		square.style.width = size + "px";
		square.style.height = size + "px";
		square.addEventListener("mouseover", function() {
			this.style.backgroundColor = rngColor();			
			
			if (track.includes(this) === true) {
				
				  var count = 0;
					for(var i = 0; i < track.length; ++i){
					    if(track[i] === this) {
					        count++;
					      

				      }
				      y = 100 - count*10; 
				      console.log(y);
					}
				this.style.filter = "brightness(" + y + "%)";
			}

			track.push(this);
		});

		container.appendChild(square);
	}
	document.getElementById("grid-container").appendChild(container);
}; 

newGrid(squareCount);

function newUserGrid() {
	document.getElementById("grid-container").innerHTML= " ";
	
	var squareCount = prompt("How many squares per side would you like for your shiny, new grid? Provide a number!")
	newGrid(squareCount)

};
