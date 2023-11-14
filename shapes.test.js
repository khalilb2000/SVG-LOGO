const { Square, Circle, Triangle} = require("./shapes")
const SVG = require('./svg');


//Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const circle = new Circle();
        var color =('pink')
        circle.setColor(color);
        expect(circle.render()).toEqual(`<circle cx =  "50%" cy = "50%" r = "100" height = "100" width = "100" fill="${color}"/>`)


    });
});

//Square
describe('Square', () => {
    test('renders correctly', () => {
        const square = new Square();
        var color =('green')
        square.setColor(color);
        expect(square.render()).toEqual(`<rect  x = "50" height =  "100%" width =  "200%"  fill="${color}"/>`)


    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const triangle = new Triangle();
        var color = 'white';
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon points="150,50 100,150 200,150\" fill=\"white\"/>`);
    });
});

