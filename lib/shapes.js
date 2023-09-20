

class Shape{
 constructor(){
        thisColor = ''
    }
setColor(color){
    this.color=(color);
}
}

class Circle extends Shape{
  // returning ${this.color}
    render(){
        return`<circle cx =  "50%" cy = "50%" r = "100" height = "100" width = "100" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    //returning ${this.color} for rect/square
    render(){
        return `<rect  x = "50" height =  "100%" width =  "200%"  fill="${this.color}"/>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height =  "100%" width =  "100%" points = "0,200,300,200,150,0" fill="${this.color}"/>`
    }
};

module.exports = { Circle, Square, Triangle}