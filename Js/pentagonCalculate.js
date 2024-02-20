function pentagonCalculate(){
    const perimeter =getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    console.log(perimeter,apothem);

    const area = 0.5 * perimeter * apothem ;
    setInnerTextById('pentagon-area',area)
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;
}


var container = document.getElementById('container');
container.innerHTML = '';