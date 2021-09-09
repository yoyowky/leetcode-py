const accs = document.getElementsByClassName("accordion");
for(let i=0; i<accs.length;i++){
  console.log(accs[i])
  accs[i].addEventListener("click", function(){
    console.log('this', this) // in regular function, this mean the current element
    this.classList.toggle("active"); // if class active exist, remove, if not there, clear
    const content = this.nextElementSibling;
    console.log('content', content)
    content.style.display === "block" ? content.style.display = "none" : content.style.display = "block";
  })

  // accs[i].addEventListener("click", (e)=>{
  //   const acc = e.target;
  //   console.log('acc', acc) // need to use e.target to get the current element
  //   console.log('this', this) // if in arrow function, no this, this means window
  // })
}