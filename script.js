const input = document.getElementsByTagName('input');
const display = document.querySelector('.display input');
const cal = () => {
for (let i = 1; i < input.length; i++){
    input[i].addEventListener('click', () => {
    display.value += input[i].value;
})
}
input[1].addEventListener('click', () => {
    display.value = null;
})
input[2].addEventListener('click', () => {
    display.value +='';
    display.value = display.value.toString().slice(0,-3);
})
input[19].addEventListener('click', () => {
    display.value = display.value.toString().slice(0,-1);
    display.value = eval(display.value);
})
input[0].addEventListener('click', () => {
    display.value == '';
    console.log(display.value)
    console.log(input.length)
})
}
cal();
console.log(input,display);