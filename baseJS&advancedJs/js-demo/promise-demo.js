function loadImg(src){ // 返回一个promise对象
    return new Promise(
        (resolve, reject)=>{
            const img = document.createElement('img');
            img.onload = ()=>{
                console.log('image is loaded')
                resolve(img);
            }
            img.onerror = ()=>{
                const err = new Error(`fail to load img ${src}`);
                console.log('error!!!')
                reject(err);
            }
            img.src = src;
        }
    )
}

const url1="http://placekitten.com/1600/900";
const url2="http://placekitten.com/g/1600/900";
loadImg(url1).then(img => {
    console.log(img.width); // img1
    document.body.appendChild(img);
    return img; // 传到第二个then里
}).then(img => {
    console.log(img.height) // img1
    return loadImg(url2)
}).then(img => {
    console.log(img.height) // img2
    document.body.appendChild(img)
}).catch(err => {
    console.error(err)
})