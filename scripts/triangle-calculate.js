/* 
    objective: get base, height of a triangle. Calculate the area by using the provided formula. and  then display the area;

    step 1: get the base value of the triangle
    step 2: added an id in base input field
    step 3: use getElementById to access the input field
    step 4: get value from input field(value is string now)
    step 5: convert the value to a number using parseFloat()

*/

function calculateTriangleArea() {
    //get triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base)

    //get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    const area = 0.5 * base * height;
    console.log('Triangle area: ',area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    
}