let inp = document.querySelectorAll('.check')
let btnSub = document.getElementById('btnSub')
let form = document.querySelector('form')



inp.forEach(el => {el.addEventListener('input', function(event){
//     if(event.target.value > 0){
//         console.log('Успех')
//     } else event.preventDefault();
//     el.classList.add('err');
//     console.log('Страница не обновилась');
//     // console.log(el);
//     // console.log(el.value);
//     // console.log(el.value.length);
})
}
) 
 
form.addEventListener('submit', checkInputs)
/*
function checkInputs(event){
    
    inp.forEach(el => {
        
        if(el.value.length < 0) {
            event.preventDefault();
            el.classList.add('err');
            console.log('Страница не обновилась');
        }
    })
   
}
*/

/*
function validity(){
    inp.every(el => {
        if(el.value.length < 0){
            return el
        }}
    )

}
*/

function checkInputs(event){
    
    inp.forEach(el => {
        
        if(el.value.length > 0){
            console.log('Успех')
            
        } else {
            event.preventDefault();
            el.classList.add('err');
            console.log('Страница не обновилась');
        }
    })
   
}


form.addEventListener('input', function(){
    inp.forEach(el => {
        el.classList.remove('err')
    })
})



/*
// inp.addEventListener('input', checkInputs)
// // inp.addEventListener('input', function(){
// //     // const inp = inp.value
// //     if(inp.value === 0) {
// //         inp.classList.add('err')
// //     }
// // })




// function inpError(el){
//     el.classList.add('err');
// }

// btnSub.addEventListener('click', checkInp)
// function checkInp(){
//     inp.forEach(el => { el.classList.add('err');
//     })
   
    
// }

//работает. отменилось действие submit по нажатию на кнопку
// btnSub.addEventListener('click', function(event){
//     event.preventDefault()
//     console.log('Страница не обновилась');
// })


// inp.forEach((el)=>{
//     if(el.lenght === 0){
//         inp.stopPropagation()
//         el.classList.add('err')
//     // } else alert('Форма отправлена')
// })

// const errEvent = (event) => {
//     console.log(inp.classList.add('err'));
// }

// inp.forEach(inp => {inp.addEventListener('click', errEvent)
    
// });
*/
