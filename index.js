class Circle {
    constructor() {
        this.width = 0.5*window.innerWidth;
        this.height = 0.5*window.innerHeight;
        this.viewport = document.getElementById('viewport');
        this.pointer = document.getElementById('pointer');
        this.cursorX, this.cursorY, this.x, this.y, this.degree = null;
    }

    animateCircle() {
        this.viewport.addEventListener('mousemove', (event) => {
            this.cursorX = event.pageX-this.width;
            this.cursorY = -(event.pageY-this.height);
            this.x = this.cursorX/this.width;
            this.y = this.cursorY/this.height;
            console.log('('+this.x+', '+this.y+')')
            let basic_angle = 180*(Math.atan((this.y)/(this.x))/Math.PI);

            if (this.x>0 && this.y>0) {
                this.degree = basic_angle;
            } else if ((this.x<0 && this.y>0) || (this.x<0 && this.y<0)) {
                this.degree = 180 + basic_angle;
            } else if (this.x>0 && this.y<0) {
                this.degree = 360 + basic_angle;
            }
            this.pointer.style.transform = 'rotate('+(-this.degree-90)+'deg)';
            return this.degree
        })
    }
}

const page = new Circle();
const rotate_deg = page.animateCircle();
document.getElementById('coordinates').innerHTML = "X coords ~ " + page.cursorX + ":" + page.width + ", Y coords ~ " + page.cursorY + ":" + page.height + ", (" + page.x + ", " + page.y + ")";
document.getElementById('angle').innerHTML = 'θ = '+rotate_deg;
