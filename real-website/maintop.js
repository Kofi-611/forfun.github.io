function accordion(a){
	var b = document.getElementById(a);
	if (b.className.indexOf("w3-show") == -1){
		b.className += " w3-show";
	} else{
		b.className=b.className.replace(" w3-show", "")
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