var width = 0.5*window.innerWidth;
var height = 0.5*window.innerHeight;
var cursorX, cursorY, x, y, degree = null;

document.getElementById('viewport').addEventListener('mousemove', (event) => {
    cursorX = event.pageX-width;
    cursorY = -(event.pageY-height);
    x = cursorX/width;
    y = cursorY/height;
    console.log('('+x+', '+y+')')
    let basic_angle = 180*(Math.atan((y)/(x))/Math.PI);

    if (x>0 && y>0) {
        degree = basic_angle;
    } else if ((x<0 && y>0) || (x<0 && y<0)) {
        degree = 180 + basic_angle;
    } else if (x>0 && y<0) {
        degree = 360 + basic_angle;
    }
    radian = Math.PI*(degree/180)
    document.getElementsByClassName('pointer')[0].style.transform = 'rotate('+(-degree-90)+'deg)';
    var sector = document.getElementsByClassName('sector')
    if (degree <= 180) {
        sector[0].style.display = 'block';
        sector[0].style.backgroundImage = "linear-gradient(-"+degree+"deg, transparent 50%, white 50%),linear-gradient("+0+"deg, white 50%, transparent 50%)";
        sector[1].style.display = 'none';
    } else {
        // sector[0].style.display = 'none';
        sector[0].style.backgroundImage = "linear-gradient(-"+180+"deg, transparent 50%, white 50%),linear-gradient("+0+"deg, white 50%, transparent 50%)";
        sector[1].style.display = 'block';
        sector[1].style.backgroundImage = "linear-gradient(-"+degree+"deg, transparent 50%, white 50%),linear-gradient("+180+"deg, white 50%, transparent 50%)";
    }
    document.getElementById('coords').innerHTML = "P(" + x + ", " + y + ")";
    document.getElementById('angle').innerHTML = 'θ = '+ radian+' rad = '+degree+'°';
    document.getElementById('sin').innerHTML = 'sin(θ) = '+Math.sin(radian);
    document.getElementById('cos').innerHTML = 'cos(θ) = '+Math.cos(radian);
    document.getElementById('tan').innerHTML = 'tan(θ) = '+Math.tan(radian);

})