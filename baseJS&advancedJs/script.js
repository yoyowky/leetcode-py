// 1. setInterval and setTimeout

// console.log('start')
// setTimeout(()=>{
//     document.getElementById('yoyo').innerText='New yoyo'
// }, 3000)
// console.log('end')

// let i = 1;
// console.log('start')
// let id = setInterval(()=>{
//     document.getElementById('yoyo').innerText=i++;
//     if(i===10){ // 最后显示1-9
//         console.log(id)
//         clearInterval(id); // 必须加个把setInterval加个id，要不不会显示
//     }
// }, 100)
// console.log('end')


// 2. event handler
// 注意：确保onclick function在page render之后才触发，所以<script>要写在body里面最后一行
// const elem = document.getElementById('yoyo');
// console.log(elem)
// elem.onclick = 
// document.getElementById("yoyo").onclick = function() {onClickHandler()};
// function onClickHandler() {
//   document.getElementById("yoyo").innerHTML = "YOU CLICKED ME!";
// }


// 3. exception handle
// let i=100;
// let j=2;
// try{
//   if(j==0){
//     throw "j cannot be zero" // if don't have this try/catch, the server will show error msg and the rest code won't trigger, Nice little statment won't show
//   }
//   console.log(i/j)
// } catch(err) {
//   console.log('err', err)
// }
// console.log('Nice little statment')

// 4. 