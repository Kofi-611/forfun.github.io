function accordion_one(){
	var b = document.getElementById("ratuse");
	if (b.className.indexOf("w3-show") == -1){
		b.className += " w3-show";
		b.previousElementSibling.className += " w3-purple";
	} else{
		b.className = b.className.replace(" w3-show", "");
		b.previousElementSibling.className = 
		b.previousElementSibling.className.replace(" w3-purple", "");
	}
}

function accordion_two(){
	var c = document.getElementById("allAlgebra");
	if (c.className.indexOf("w3-show") == -1){
		c.className += " w3-show";
		c.previousElementSibling.className += " w3-purple";
	} else{
		c.className = c.className.replace(" w3-show", "");
		c.previousElementSibling.className =
		c.previousElementSibling.className.replace(" w3-purple", "");
	}
}

function sideopen(){
	document.getElementById("allformulas").style.marginleft = "25%";
	document.getElementById("sidenav").style.width = "25%";
	document.getElementById("sidenav").style.display = "block";
	document.getElementById("openside").style.display = 'none';
}

function sideclose(){
	document.getElementById("allformulas").style.marginLeft="0%";
	document.getElementById("sidenav").style.display = "none";
	document.getElementById("openside").style.display = "inline-block";
}
