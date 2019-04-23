Math.radians = function radian(degrees){
    return (degrees * (Math.PI / 180));
};

Math.degrees = function degree(radians){
    return (radians * (180 / Math.PI));
};

function tangent(c = document.getElementById("a").value){//c is angle
    var d, e;
    d = Math.tan(Math.radians(c));
    console.log(c);
    console.log(d);
    document.getElementById("b").innerHTML = d;
};
/*
function arcstep(i = document.getElementById("c").value){
    var j = i + 0.01;
    document.getElementById("c").value = j;
};
*/
function arctangent(f = document.getElementById("c").value){//f is tangent of angle
    var g, h;
    g = Math.atan(Math.radians(f));
    h = Math.degrees(f);
    console.log(f);
    console.log(g);
    console.log(h);
    document.getElementById("d").innerHTML = h;
};

function sine(k = document.getElementById("e").value){//k is angle
    var l;
    l = Math.sin(Math.radians(k));
    console.log(k);
    console.log(l);
    document.getElementById("f").innerHTML = l;
};

function arcsine(m = document.getElementById("g").value){//m is sine of angle
    var n;
    n = Math.asin(Math.radians(m));
    console.log(m);
    console.log(n);
    document.getElementById("h").innerHTML = n;
};

function cosine(o = document.getElementById("i").value){//o is angle
    var p;
    p = Math.cos(Math.radians(o));
    console.log(o);
    console.log(p);
    document.getElementById("j").innerHTML = p;
};

function arccosine(q = document.getElementById("k").value){//q is cosine of angle
    var r;
    r = Math.acos(Math.radians(q));
    console.log(q);
    console.log(r);
    document.getElementById("l").innerHTML = r;
};