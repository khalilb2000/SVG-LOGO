const inquirer = require("inquirer");

class Shape{
 constructor(){
        this.thisColor = ''
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
        return `<polygon points="150,50 100,150 200,150\" fill=\"white\"/>`
    }
};

module.exports = { Circle, Square, Triangle}