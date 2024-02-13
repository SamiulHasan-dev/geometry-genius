
// function parallelogramArea(){
    /* const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText); */
//     const base = parallelogramBase();
//     console.log(base)
// }

// function parallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function parallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log(height);
    const height = getInputValueById('parallelogram-height');
    // console.log(height);

    const area = base*height;
    console.log(area)

    setInnerTextById('parallelogram-area',area);
    
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}