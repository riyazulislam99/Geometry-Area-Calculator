// function calculateParallelogramArea() {
//     const parallelogramBaseInput = document.getElementById('parallelogram-width');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);

//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInput.value;
//     const height = parseFloat(parallelogramHeightText);

//     // apply the formula
//     const area = base * height;

//     // display the value of area
//     const areaSpan = document.getElementById('parallelogram-area');
//     areaSpan.innerText = area;
// }




// another hard way but small and no repetition
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    // apply formula
    const area = base*height;
    
    // display the area of value
    setInnerTextById('parallelogram-area', area);
    
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue; 
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}