Math.radians = function radian(degrees){
    a = (degrees * (Math.PI / 180));
}

Math.degrees = function degree(radians){
    b = (radians * (180 / Math.PI));
}

function tangent(c = document.getElementById("a").value){//c is angle
    var d, e;
    d = Math.tan(c);
    e = Math.degrees(d);
    document.getElementById("debugone").innerHTML = c;
    document.getElementById("b").innerHTML = e;
}

function arctangent(f = document.getElementById("c").value){//f is tangent of angle
    var g, h;
    g = Math.atan(f);
    h = Math.degrees(f);
    document.getElementById("debugtwo").innerHTML = f;
    document.getElementById("d").innerHTML = h;
}
