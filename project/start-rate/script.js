let stars = document.querySelectorAll(".star");
document.querySelector(".star-container").addEventListener("click", rating);
let rate=document.querySelector(".rate");

function rating(e){
    stars.forEach(star => star.classList.remove("star_checked"))
    console.log('e.target', e.target);
    const {target} = e;
    const index = [...stars].indexOf(target);
    console.log('index', index)
    target.classList.add("star_checked");
    rate.innerHTML=`Rate: ${index>-1?5-index:0}/5`
}