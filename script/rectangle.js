function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width)

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleInputText = rectangleLengthInput.value;
    const length = parseFloat(rectangleInputText);
    // console.log(length);

    const area = width * length;
    const areaSpan =  document.getElementById('rectangle-area');
    areaSpan.innerText = area;


}