const arr = [["dog", "mammal"],
["shark", "fish"],
["cat", "mammal"],
["mammal", "animal"],
["fish", "animal"],
["whitecat","cat"],
["sheep","mammal"],
["sparrow","bird"],
["blacksheep","sheep"]];



const obj = {};

arr.forEach(([child, parent]) => {
    if (!obj[parent]) obj[parent] = {};
    
    if (child in obj) {
        obj[parent][child] = obj[child];
        delete obj[child];
    } else {
        obj[parent][child] = {};
    }
});
Object.keys(obj).forEach(item => dfs(obj[item]));

function dfs(o) {
    for (const key in o) {
        if (key in obj) {
            Object.assign(o[key], obj[key]);
            delete obj[key];
            dfs(o[key]);
        }
    }
}

console.log(obj) 