const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {Circle , Square, Triangle} = require("./lib/shapes");



class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        //returning ${this.shapeElement} and ${this.textElement}
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }

    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
    setTextElement(text){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
    }

}


const question = [

    {
type: "input",
name: "text",
message: "TEXT: Please enter up to (3) charaters:",

    },

    {
        type:"input",
        name:"text-color",
        message: "TEXT-COLOR: Please enter a color keyword (OR hexadecimal number):"
    },

    {
        type:"input",
        name:"shape",
        message: "SHAPE COLOR : Please enter a color keyword (OR hexadecimal number):"
    },
    {
        type:"list",
        name:"pixel-img",
        message:"Which image will you choose?",
        choices: ["Circle" ,"Triangle","Square"],


    }
];