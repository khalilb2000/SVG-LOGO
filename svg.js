class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shapeElement}
            ${this.textElement}
        </svg>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }

    setTextElement(text) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`;
    }
}

module.exports = SVG;
