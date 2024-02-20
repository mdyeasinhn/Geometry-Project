function triangleAreaCalculator(){
    // triangle base
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText= triangleBaseInput.value;
    const base =parseFloat(triangleBaseText);
    // console.log(base);
    // triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);
    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:',area)

    // triangle display area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText= area;
}