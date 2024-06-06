/* window.addEventListener('load', function(){

//     let inp1 = document.getElementById('num1')
//     let inp2 = document.getElementById('num2')
//     let btnRes = document.getElementById('btnResult')
//     let resBox = document.getElementById('result')
    
//     // console.log(inp1, inp2, btnRes, resBox);
//     btnRes.addEventListener('click', function(){
//         // num = Math(inp1.value) + Math(inp2.value)
//         console.log(inp1.value + inp2.value)
//         // console.log(1);
//     } )
// })
*/


let inp1 = document.getElementById('num1')
let inp2 = document.getElementById('num2')
let selectOperation = document.getElementById('operation')
let btnRes = document.getElementById('btnResult')
let resBox = document.getElementById('result')
let controls = [inp1, inp2, selectOperation]

btnRes.addEventListener('click', function(){
    const a = Number(inp1.value)
    const b = Number(inp2.value)
    const operation = selectOperation.value

    const result = calc(a, b, operation)
    // console.log(result);
    // resBox.innerHTML = result

    // btnRes.disabled = true

    /*  // inp1.addEventListener('input', function() {
    //     btnRes.disabled = false
    // })
    // inp1.addEventListener('input', checkInputs)
    // inp2.addEventListener('input', checkInputs)
 
    // resBox.addEventListener('input', function(){
    //     if (inp1.value !== "" || inp2.value !== "" ) {
    //         btnRes.disabled = true
    //     } else {
    //         btnRes.disabled = false
    //     }

    // })
    */
    

})
/*  
// inp1.addEventListener('click', checkInputs)
// inp2.addEventListener('click', checkInputs)
// selectOperation.addEventListener('click', checkInputs)
// разблокировка кнопки при изменении содержимого в input
// inp1.addEventListener('input', checkInputs)
// inp2.addEventListener('input', checkInputs)

// function checkInputs() {
//     btnRes.disabled = false
// }

//удляет все нечисловые элементы в троке


inp1.addEventListener('input', numInputs)
inp2.addEventListener('input', numInputs)
selectOperation.addEventListener('click', numInputs)

function numInputs() {
    inp1.value = inp1.value.replace(/\D/g, '')
    inp2.value = inp2.value.replace(/\D/g, '')
    btnRes.disabled = false
}



/* // function checkInputs() {
//     if (inp1.value!== "" && inp2.value !== "") {
//         btnRes.disabled = false;
//     } else {
//         btnRes.disabled = true;
        
//     }
// }

// inp1.addEventListener('input', checkInputs)
// inp2.addEventListener('input', checkInputs)
*/

inp1.addEventListener('input', numInputs)
inp2.addEventListener('input', numInputs)


// inp1.addEventListener('input', checkInputs)
// inp2.addEventListener('input', checkInputs)
// selectOperation.addEventListener('input', checkInputs)



controls.forEach(el => el.addEventListener('input', checkInputs))

//удляет все нечисловые элементы в троке
function numInputs() {
    //Позволяет использовать дробные числа и числа со знаком минус. Убирает задвоение точки
    // this.value = this.value.match(/-?[0-9]+.?[0-9]*/g)[0];
    // this.value = this.value.match((/-?[0-9]+.?[0-9]/g)[0])
    this.value = this.value.replace(/\D/g, '')
    // inp1.value = inp1.value.replace(/\D/g, '')
    // inp2.value = inp2.value.replace(/\D/g, '')
}


function checkInputs() {
    btnRes.disabled = controls.every(el => el.dataset.old === el.value)
    // btnRes.disabled = (inp1.dataset.last === inp1.value && 
    //     inp2.dataset.last === inp2.value && 
    //     selectOperation.dataset.last === selectOperation.value
    // )
}



const OPERATIONS = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
}

function sum (a, b) {
    return a + b
}
function subtract (a, b) {
    return a - b
}
function multiply (a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}

function calc (a, b, operation) {


    let result = null

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b)
            break;

        case OPERATIONS.subtract:
            result = subtract(a, b)
            break;
        case OPERATIONS.multiply:
            result = multiply(a, b)
            break;
        case OPERATIONS.divide:
            result = divide(a, b)
            break;
        default:
            break;
    } 

    if (operation === OPERATIONS.divide && b===0) {
        result = 'На ноль делить нельзя'
    }
    // console.log(operation);
    // return result;
    resBox.innerHTML = result
    controls.forEach(el => el.dataset.old = el.value)
    // inp1.dataset.last = inp1.value
    // inp2.dataset.last = inp2.value
    // selectOperation.dataset.last = selectOperation.value
    btnRes.disabled = true
   
}






