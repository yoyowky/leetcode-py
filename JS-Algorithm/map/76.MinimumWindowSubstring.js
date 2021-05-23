/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let i=0
    let l = 0;
    let map = new Map();
    for(let c of t){
        map.set(c, map.has(c)?map.get(c)+1:1)
    }
    let res = s;
    let hasVal = false;
    let mapSize = map.size;
    while(i<s.length){
        const ch = s.charAt(i);
        if(map.has(ch)){
            map.set(ch, map.get(ch)-1);
            if(map.get(ch) === 0) mapSize--;
        }
        while(mapSize === 0){
            hasVal = true;
            let ch0 = s.charAt(l);
            if(!t.includes(ch0)){
                l++;
                continue;
            }
            res = res.length>i-l+1? s.slice(l,i+1) : res;

            if(map.get(ch0)===0){
                map.set(ch0, 1);
                mapSize++;
            } else {
                map.set(ch0, map.get(ch0)+1);
            }
            l++;
        }
        i++
    }
    return hasVal?res:"";
};


s = "ADOBECODEBANC", t = "ABC"
minWindow(s,t);