var i = 1; 
var squareCount = 16;

function rgbColor() {
	var letters = "ABCDF0123456789".split("");
	
	rng = []
	for (i=0; i < 6; i++) {
		random = Math.floor(Math.random() * 10);
		rng.push(letters[random]);
	}
	rng = "#" + rng.join("");
	return rng;
}

rgbColor();


function newGrid(squareCount) {
	
	var container = document.createElement('div');
	squareCount = squareCount * squareCount

	container.setAttribute("class", "square-container");

	for (var i=1; i <= squareCount; i++) { 
		var square = document.createElement('div');
		square.setAttribute("class", "square");
		size = (400 / Math.sqrt(squareCount)) - 2;
		square.style.width = size + "px";
		square.style.height = size + "px";
		square.addEventListener("mouseleave", function() {
			this.style.backgroundColor = rgbColor();
		});

		container.appendChild(square);
	}
	document.getElementById("wrapper").appendChild(container);
}; 

newGrid(squareCount);

function newUserGrid() {
	document.getElementById("wrapper").innerHTML= " ";
	 squareCount = prompt("How many squares per side would you like for your shiny new grid? Provide a number!")
	newGrid(squareCount)

};
