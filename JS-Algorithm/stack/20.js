/*
map:
let map = new Map;
map.set(key, value);
map.get(key)
map.delete(key)
map.clear
map.size()
array:
const arr = [];
arr.push(val);
arr.pop()
arr.length
**/

// map (dict, hashmap)  O(n)
var isValid = function(s) {
    let map = new Map;
    map.set("}", "{");
    map.set("]", "[");
    map.set(")", "(");
    const stack = [];
    for(i=0; i<s.length; i++){
        if(s[i] === "{" || s[i] === "(" || s[i] === "["){
            stack.push(s[i]);
        }else{
            const lastElement = stack[stack.length - 1];
            if (map.get(s[i]) !== lastElement){
                return false;
            } else {
                stack.pop()
            }
        }
    }
    if(stack.length === 0) return true;
    return false;
};


s = "()"
console.log(isValid(s))