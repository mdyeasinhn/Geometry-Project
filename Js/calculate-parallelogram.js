// function calculateParallelogram(){
//     //get base input
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     console.log(base);
//     //get height input
//     const heightInput = document.getElementById('parallelogram-height');
//     const heightText = heightInput.value;
//     const height=parseFloat(heightText);
//     console.log(height);
//     //get area
//     const area=base*height;
//     console.log('area of the parallelogram:',area);

//     //display parallelogram
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText =area; 
    

// }


function calculateParallelogram (){
    const base = getInputValueById('parallelogram-base')
    console.log('Base Value:',base);
// height value
    const height = getInputValueById('parallelogram-height');
    console.log('Height Value:',height);

    //area
    const area = base*height;
    console.log('Area of the parallelogram:',area)

    //display 
    // const parallelogramArea = document.getElementById('parallelogram-area');
    // parallelogramArea.innerText= area;
    setInnerTextById('parallelogram-area',area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    console.log(inputValue);
    return inputValue;


}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText= area
}
