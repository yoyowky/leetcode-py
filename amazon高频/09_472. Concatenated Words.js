// Use a set for quick lookup
// Call isConcat on each word. If a word's prefix is in the dictionary, see if the suffix can also be concatenated.
// You can use the dictionary as a memo, when you find a word that can be made via concatenation, you can store it in the dictionary
// When you loop through the words, remember to delete and add the word from the set before and after the isConcat call
// set+
var findAllConcatenatedWordsInADict = (words) => {
    const dict = new Set(words);
    const isConcat = (word) => {
        if(dict.has(word)) return true;
        for(let i = 0; i < word.length; i++){
            let prefix = word.slice(0,i+1);
            if(dict.has(prefix)){
                let suffix = word.slice(i+1);
                let result = isConcat(suffix);
                if(result){
                    return true;
                }
            }
        }
        return false;
    }
    const results = [];
    for(const word of words){
        dict.delete(word);
        if(isConcat(word)) results.push(word);
        dict.add(word);
    }
    return results;
};


const arr = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"];
const res = findAllConcatenatedWordsInADict(arr);
console.log('res', res)