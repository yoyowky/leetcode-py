/**
// Implement a function that takes two parameters: an Object and a Path.
// It returns the value of the object following path
// Please Implement in JavaScript

get({ developer: "Software Engineer" }, "developer"); // => 'Software Engineer'
get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"); //=>'Cruz
get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); //=>0
get([{ developer: "Tom" }, [0, null]], "[1][1]"); //=>null
 */

const get = (obj, str)=>{
    let queue = [];
    let res = obj;
    let key = '';
    Array.from(str).forEach(function(char, i) {
        if(
            char === '[' || char === ']' || char === '.'
        ){
            if(key.length>0){
                queue.push(key)
            }
            key='';
        } else if (i===str.length-1){
            key+=char;
            queue.push(key);
            key = '';
        } else {
            key+=char;
        }
    });
    queue.forEach(key => res = res[key])
    return res;
}


const obj = [{ developer: "Tom" }, { count: [0, 1] }]
const str = "[1].count[0]";
const res = get(obj,str);
console.log('res', res)
