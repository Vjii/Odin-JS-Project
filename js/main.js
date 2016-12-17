

var i = 1; 
var squareCount = 16;

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
			this.style.backgroundColor = "blue";
		});

		console.log(square + i);
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



//hover effect 
//1. setup eventListener that responds to mouseleave/mouseenter
//- check reference 
//- write correct code 
//2. write a method that changes square's color on mouseleave



