// const getValues = (id)=>{
//     const obj = {};
//     const element = document.querySelector(`#${id}`)
//     const inputs = element.querySelectorAll('input[type="text"]');
    
//     for(let input of inputs) {
//         let inputValue = input.value;
//         let names = input.name.split('.');
//         let tmpObject = obj;
//         for (let i = 0; i < names.length; i++) {
//             tmpObject[names[i]] = {...tmpObject[names[i]]};
//             if (i === names.length - 1) {
//                 tmpObject[names[i]] = inputValue;
//             } else {
//                 tmpObject = tmpObject[names[i]];
//             }
//         }
//     }
//     return obj;
// }

// const res = getValues('parent');
// console.log(res)
// We access to the inputs by their id's


// Form
let form = document.getElementById("parent");

// Event listener
form.addEventListener("submit", function (e) {
    // console.log('e', e.target)
    const obj = {};
    // const inputs = form.querySelectorAll('input[type="text"]');
    const inputs = e.target.querySelectorAll('input[type="text"]');
    inputs.forEach((input)=> {
        let inputVal = input.value;
        let names = input.name.split('.');
        let tempObj = obj;
        for(let i=0; i<names.length; i++){
            tempObj[names[i]] = {...tempObj[names[i]]};
            if( i === names.length-1){
                tempObj[names[i]] = inputVal;
            } else {
                tempObj = tempObj[names[i]]
            }
        }
    })
    console.log('obj', obj)
      
    e.preventDefault();
});