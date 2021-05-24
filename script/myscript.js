/* global console, alert, prompt, for fixing error (unexpected ++ or -- do i += 1) */
// change background to moon
function getMoon() {
	"use strict";
	document.querySelector(".sun").style.display = "none";
	document.querySelector(".moon").style.display = "block";
	document.getElementById("header").style.backgroundImage = "url(./images/bg-desktop-light.jpg)";
	document.querySelector(".input-todo").style.backgroundColor = "hsl(0, 0%, 98%)";
	document.querySelector(".input").style.backgroundColor = light;
	document.querySelector(".input").style.border = "1px solid transparent";
	document.getElementById("footer").style.backgroundColor = light;
	document.getElementById("footer2").style.backgroundColor = light;
	var x, i,
		a, b;
	x = document.querySelectorAll(".normal");
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = light;
			
	}
	
    a = document.querySelectorAll(".Complete");
	for (b = 0; b < a.length; b++) {
		a[b].style.backgroundColor = light;

	}
	
	dark = "hsl(0, 0%, 98%)";
	document.body.style.backgroundColor = "white";
}

//change background to sun
function getSun() {
	"use strict";
	document.querySelector(".moon").style.display = "none";
	document.querySelector(".sun").style.display = "block";
	document.getElementById("header").style.background = "url(./images/bg-desktop-dark.jpg)";
	document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
	document.querySelector(".input-todo").style.backgroundColor = "hsl(235, 24%, 19%)";
	document.querySelector(".input").style.backgroundColor = "hsl(235, 24%, 19%)";
	document.querySelector(".input").style.border = "1px solid transparent";
	document.getElementById("footer").style.backgroundColor = "hsl(235, 24%, 19%)";
	document.getElementById("footer2").style.backgroundColor = "hsl(235, 24%, 19%)";
	var x, i,
	    a, b;
	x = document.querySelectorAll(".normal");
	for (i = 0; i < x.length; i++) {
	    x[i].style.backgroundColor = "hsl(235, 24%, 19%)";
			
	}
	
    a = document.querySelectorAll(".Complete");
	for (b = 0; b < a.length; b++) {
		a[b].style.backgroundColor = "hsl(235, 24%, 19%)";

	}
	
    dark = "hsl(235, 24%, 19%)";
	
}

//create todo list
var items = [1];
var dark = "hsl(235, 24%, 19%)";
var light = "hsl(0, 0%, 98%)";
function createList() {
	"use strict";
	//const mq = window.matchMedia( "(min-width: 850px)" );
	var create = document.createElement("div"),
	    text = document.createElement("span"),
		circle = document.createElement("i"),
	    check = document.createElement("img"),
		image = document.createElement("img");
	     
    create.style.borderBottom = "1px solid hsl(233, 14%, 35%)";
	     //create.setAttribute("class", "normal");
	//document.querySelector(".input").onkeypress = function() { 
	//function checkk() { 
	if (event.keyCode === 13) {
        event.preventDefault();
	  
		if (document.querySelector(".input").value === '') {
	        alert("please add a todo");
			
		}
		/*var create = document.createElement("div");
		var text = document.createElement("span"); */
		//const mq = window.matchMedia( "(min-width: 850px)" );
		    else {
			    // create element 1
			    //var create = document.createElement("div");
	            create.style.margin = "50px auto";
	            create.style.marginTop = "-50px";
	            create.style.width = "600px";
	            create.style.height = "60px";
	            create.style.backgroundColor = dark;
				create.style.paddingLeft = "19px";
				create.style.paddingTop = "15px";
				create.setAttribute("class", "normal");
				
	            // create element 2
				// var circle = document.createElement("i");
				circle.setAttribute("class", "far fa-circle");
				circle.style.fontSize = "25px";
				circle.style.cursor = "pointer";
				circle.style.color = "hsl(237, 14%, 26%)";
				// create element 2 hidden
				//var check = document.createElement("img");
				check.src = "./images/icon-check.svg";
				check.style.background = "linear-gradient(to right , hsl(192, 100%, 67%) , hsl(280, 87%, 65%))";
				check.style.borderRadius = "50%";
				check.style.padding = "10px";
				check.style.position = "relative";
				check.style.left = "-3px";
				check.style.top = "-25px";
				check.style.cursor = "pointer";
				check.style.display = "none";
				circle.onclick = function () {
					circle.style.display = "none";
					check.style.display = "block";
					text.style.left = "25px";
					text.style.top = "2px";
					text.style.textDecoration = "line-through";
					text.style.color = "hsl(233, 14%, 35%)";
					image.style.top = "2px";
					create.setAttribute("class", "Complete");
					//document.querySelector(".item-left").innerHTML = items--  + " " + "items left";
					document.querySelector(".item-left").innerHTML = items[0]-- - 2  + " " + "items left";
					
				    check.onclick = function () {
						check.style.display = "none";
						circle.style.display = "block";
						text.style.top = "-22.5px";
						text.style.textDecoration = "none";
						text.style.color = "hsl(234, 39%, 85%)";
						image.style.top = "-22.5px";
						create.setAttribute("class", "normal");
						document.querySelector(".item-left").innerHTML = items[0]++ + " " + "items left";
				    };
					
				};
				
				
				
			
				// create element 3
				//var text = document.createElement("span");
				text.innerHTML = document.querySelector(".input").value;
				text.style.marginLeft = "20px";
				text.style.color = "hsl(234, 39%, 85%)";
				text.style.position = "relative";
				text.style.top = "-3px";
				text.style.textDecoration = "none";
				// create element 4
				//var image = document.createElement("img");
				image.src = "./images/icon-cross.svg";
				image.style.position = "relative";
				image.style.top = "2px";
				image.style.right = "30px";
				image.style.cursor = "pointer";
				image.style.float = "right";
				image.onclick = function () {
					create.style.display = "none";
					create.style.opacity = "0";
					create.style.visibility = "hidden";
					create.style.position = "absolute";
					if (text.style.textDecoration === "none") {
					    document.querySelector(".item-left").innerHTML = items[0]-- - 2 + " " + "items left";
				    }
				};
				
			
				document.querySelector(".create-list").appendChild(create);
				create.appendChild(circle);
				create.appendChild(text);
				create.appendChild(image);
				create.appendChild(check);
				document.querySelector(".input").value = "";
				document.querySelector(".item-left").innerHTML = items[0]++ + " " + "items left";
				// document.querySelector(".item-left").innerHTML = item++ + " " + "items left";
		        
         
		    }
		
    }
		
	
	// clear completed
    document.querySelector(".clCompleted").onclick = function () {
       
		var x, i;
		x = document.querySelectorAll(".Complete");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			
		}
						
	    //}
    };
	
	
	// show completed
	document.querySelector(".completed").onclick = function () {
       
		var x, i,
			a, b;
		x = document.querySelectorAll(".normal");
		    //b = document.querySelectorAll(".complete");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
				
		}
		
		//var a, b;
		a = document.querySelectorAll(".Complete");
		for (b = 0; b < a.length; b++) {
			a[b].style.display = "block";

		}
		// dih hya hya dih w ashal w a2sar 
		
	/*	var i, j;
		var x = document.querySelectorAll(".normal"),
		    a = document.querySelectorAll(".Complete");
		for (i = 0; i < x.length; i++) {
			 x[i].style.display = "none"; 
    for (j = 0; j < a.length; j++) {
        //x[i].style.display = "none"; 
        a[j].style.display = "block"; 
    }
			 
  } */
		
						
	    
    };
	
	
	// show active
	document.querySelector(".active").onclick = function () {
       
		var x, i,
			a, b;
		x = document.querySelectorAll(".Complete");
	    for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";

		}
		
		//var a, b;
		a = document.querySelectorAll(".normal");
		for (b = 0; b < a.length; b++) {
			a[b].style.display = "block";

		}
	    
    };
	
   
   // show all
    document.querySelector(".all").onclick = function () {
       
		var x, i;
		x = document.querySelectorAll(".Complete , .normal");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "block";

	    }
						
	    
    };
	
	// div for the small devices
	function change() {
	    const mq = window.matchMedia( "(max-width: 850px)" );
				if (mq.matches) {
					create.style.width = "400px";
				}  
		else{
			create.style.width = "600px";
		}
	
    }
	
	setInterval(change , 10);

}/*
const mq = window.matchMedia( "(max-width: 850px)" );
function changeWidth(){
	const mq = window.matchMedia( "(max-width: 850px)" );
	if(mq.matches) { 
		var x, i;
		x = document.querySelectorAll(".normal");
		for (i = 0; i < x.length; i++) {
			x[i].style.width = "400px";

	    }
	//document.querySelector(".normal").style.width = "400px";
		}
} */
//createList();
setInterval(createList , 10);
