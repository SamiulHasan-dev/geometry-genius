
function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    console.log(perimeter);
    const apothem = getInputValueById('pentagon-apothem');
    console.log(apothem);

    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area',area);
}

function getInputValueById(inputFieldId){
    const input = document.getElementById(inputFieldId);
    const inputValueText = input.value;
    const value = parseFloat(inputValueText);

    return value;
}

function getElementById(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}