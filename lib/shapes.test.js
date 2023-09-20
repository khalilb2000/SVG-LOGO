const { Square, Circle, Triangle} = require("/.shapes");

//Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const circle = new Circle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx =  "50%" cy = "50%" r = "100" height = "100" width = "100" fill="${color}"/>`)


    });
});

//Square
describe('Square', () => {
    test('renders correctly', () => {
        const circle = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx =  "50%" cy = "50%" r = "100" height = "100" width = "100" fill="${color}"/>`)


    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const circle = new Triangle();
        var color =('white')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx =  "50%" cy = "50%" r = "100" height = "100" width = "100" fill="${color}"/>`)


    });
});