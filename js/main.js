var container = document.createElement('div');
container.setAttribute("class", "square-container");

var i = 1; 

for (var i=1; i <= 16*16; i++) { 
	var square = document.createElement('div');
	square.setAttribute("class", "square");

	square.addEventListener("mouseleave", function() {
		this.style.backgroundColor = "blue";
	});

	console.log(square + i);
	container.appendChild(square);

}

document.getElementById("wrapper").appendChild(container);

//hover effect 
//1. setup eventListener that responds to mouseleave/mouseenter
//- check reference 
//- write correct code 
//2. write a method that changes square's color on mouseleave



