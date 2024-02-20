function calculateRectangleArea (){
    //get rectangle length 
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length=parseFloat(lengthText);
    console.log(length);

    //get rectangle width
    const widthInput= document.getElementById('rectangle-width');
    const widthText =widthInput.value;
    const width= parseFloat(widthText);
    console.log(width);

    // get area
    const area = length * width;
    console.log('area of the rectangle:',area);
    //display rectangle
    const areaSpan =document.getElementById('rectangle-area');
    areaSpan.innerText= area;

}