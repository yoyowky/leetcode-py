/**
 * @param {string} s
 * @return {number}
 */

// string str.charAt(0);
// str.length;
// str.slice(i,j)
//  o(n), O(n)
 var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l = 0;
    let res = '';
    for(let i=0; i<s.length;i++){
        const ch = s.charAt(i);
        if(map.has(ch)){
            l = Math.max(map.get(ch)+1,l);
        }
        map.set(ch, i);
        res = Math.max(i-l+1, res);
    }
    console.log(res)
    return res;
};
const s = "abcabcbb";
lengthOfLongestSubstring(s)