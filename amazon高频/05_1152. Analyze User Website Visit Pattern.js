/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
 var mostVisitedPattern = function(username, timestamp, website) {
    const newArray = timestamp.map((item,i)=>{ // 建立三元数组
        return [username[i], timestamp[i], website[i]] // 记得加return
    })
    newArray.sort((a,b)=>a[1]-b[1]); // 将三元数组按照时间排序
    // 建立用户的obj
    let userObj = {};
    newArray.forEach(item => {
        if(!userObj[item[0]]) userObj[item[0]]=[];
        userObj[item[0]].push(item[2])
    })
    console.log(userObj);
    let max = ['',0];
    let seq = {};
    Object.entries(userObj).forEach(([,websites])=>{
        let userWebsite = {}; // 局部变量，每一轮循环代表一个user，换user的时候要清空
        const l = websites.length;
        console.log(l, websites)
        for(let i=0; i<=l-3; i++){
            for(let j=i+1; j<=l-2; j++){
                for(let k=j+1; k<=l-1; k++){
                    const key = `${websites[i]}|${websites[j]}|${websites[k]}`;
                    if(!userWebsite[key]) userWebsite[key]=1; // 防止有重复key的时候+1，1代表当前用户
                }
            }
        }
        console.log('userWebsite', userWebsite)
        Object.keys(userWebsite).forEach(key=>{
            console.log(key)
            if(!seq[key]) seq[key]=0; // seq为全局变量，换user时会增加
            seq[key]+=1;
            // console.log('seq', seq) // 不能console这行，会超时！！！？？？？
            if(
                // 情况1: value相同但是字母排序靠前
                (seq[key] === max[1] && key.split('|').join(' ') < max[0].split('|').join(' ')) ||
                // 情况2: value大
                seq[key] > max[1]
            ){
                max[0] = key;
                max[1] = seq[key]
            }
        })
    })
    console.log('res:', max[0].split('|'))
    return max[0].split('|'); 
};

// username=["joe","joe","joe","james","james","james","james","mary","mary","mary"];
// timestamp=[1,2,3,4,5,6,7,8,9,10];
// website=["home","about","career","home","cart","maps","home","home","about","career"];


username = ["vvmuq","ik","vvmuq","ik","ik","ik","vvmuq","ik","ik","ik","ik","ik","ik","vvmuq","ik","ik","ik","ik","vvmuq","ik","vvmuq","vvmuq","ik","ik","vvmuq","ik","ik","vvmuq","ik","vvmuq","ik","ik","ik","ik","ik","ik","vvmuq","ik","ik","vvmuq","ik","ik","ik","ik","vvmuq","ik","vvmuq","ik"]
timestamp = [737116207,404491249,163392926,547826228,247036655,161878059,119469501,284431940,619942148,843353597,476779662,68349233,157693127,910502248,428410180,725978547,290017537,486408630,450590323,363612173,457001318,402405956,837215004,566391149,172783421,484369534,421422273,425711796,186010241,776465464,433243528,996223233,32454685,380298053,532073728,855334928,30752426,609370747,67640612,505827481,223745957,51438114,90204420,540298878,82670951,420671014,502588374,971108794]
website = ["lhuylcfsee","uljtaq","ztvoafcxbr","lpxep","lpxep","p","aeittp","yzmvwewgh","jyaggkh","x","nirindikx","zhng","jyaggkh","ctxtsjeo","iaoxch","lhuylcfsee","jyaggkh","ctxtsjeo","rv","dzsyauevy","hfgglj","hfgglj","hfgglj","zhng","zhng","zhng","nxb","oxzxzhy","ztvoafcxbr","iaoxch","aeittp","x","bwkmavorzr","g","nirindikx","lpxep","dzsyauevy","pudqbeneuo","nxb","iaoxch","bjfykhkio","g","iaoxch","yxh","pudqbeneuo","svaa","rv","pb"]

mostVisitedPattern(username,timestamp,website)



// /**
//  * @param {string[]} username
//  * @param {number[]} timestamp
//  * @param {string[]} website
//  * @return {string[]}
//  */
//  var mostVisitedPattern = function(username, timestamp, website) {
//     // 整合成以timestamp排序的三元数组， O(n log n)
//     /**
//      * [
//             [ 'james', 1, 'maps' ],
//             [ 'joe', 2, 'about' ],
//             [ 'joe', 3, 'career' ],
//             [ 'james', 4, 'home' ],
//             [ 'james', 5, 'cart' ],
//             [ 'joe', 6, 'home' ],
//             [ 'james', 7, 'home' ],
//             [ 'mary', 8, 'home' ],
//             [ 'mary', 9, 'about' ],
//             [ 'mary', 10, 'career' ]
//         ]
//      */
//     const entriesMap = timestamp.map((item, i) => [username[i], timestamp[i], website[i]])
//         .sort((a, b) => a[1] - b[1]); // a,b为新的三元数组的元素
//     // 建立user的obj， O(n)
//     /**
//      * {james: [ 'maps', 'home', 'cart', 'home' ],
//         joe: [ 'about', 'career', 'home' ],
//         mary: [ 'home', 'about', 'career' ]}
//      */
//     const entriesByUsers = {};
//     entriesMap.forEach(entry => {
//         if (!entriesByUsers[entry[0]]) entriesByUsers[entry[0]] = [];
//         entriesByUsers[entry[0]].push(entry[2]);
//     });
//     // 
//     const seq = {};
//     let max = ['', 0];
//     console.log(Object.entries(entriesByUsers))
//     Object.entries(entriesByUsers).forEach(([, websites]) => {
//         // websites: [ 'maps', 'home', 'cart', 'home' ], 第1层循环
//         // websites: [ 'about', 'career', 'home' ], 第2层循环
//         // websites: [ 'home', 'about', 'career' ], 第2层循环
//         const seqByUsers = {};
        
//         for(let i = 0; i < websites.length - 2; i++) {
//             for(let j = i + 1; j < websites.length - 1 ; j++) {
//                 for(let k = j + 1; k < websites.length ; k++) {
//                     const key = `${websites[i]}|${ websites[j]}|${websites[k]}`;
//                     console.log('key', key)
//                     if (!seqByUsers[key]) seqByUsers[key] = 1;
//                 }
//             }
//         }
//         console.log('seqByUsers', seqByUsers)
//         /**
//          * seqByUsers: {  //第1层循环
//             'maps|home|cart': 1,
//             'maps|home|home': 1,
//             'maps|cart|home': 1,
//             'home|cart|home': 1
//             }
//          */
        
//         // 整合所有用户seqByUsers的key到新的obj-seq里面
//         Object.keys(seqByUsers).forEach(seqByUser => {
//             if (!seq[seqByUser]) seq[seqByUser] = 0;
//             seq[seqByUser] += 1;
//             // max = ['', 0];
//             console.log('111', seqByUser)
//             console.log('222', seqByUser.split('|').join(' '))
//             console.log('333',max[0].split('|').join(' '))
//             console.log('000 y/n:',seqByUser.split('|').join(' ')<max[0].split('|').join(' '))
//             console.log('111 y/n:',seqByUser.split('|').join('')<max[0].split('|').join(''))
//             console.log('aaa y/n:',seqByUser<max[0])
// console.log('bbb y/n:',seq[seqByUser] > max[1])
//             if (
//                 (
//                     seq[seqByUser] === max[1] && seqByUser.split('|').join(' ')<max[0].split('|').join(' ')
//                 ) 
//                 ||
//                 seq[seqByUser] > max[1]
//             ) {
//                 console.log('update max')
//                 max[0] =  seqByUser;
//                 max[1] = seq[seqByUser];
//             }
//             console.log('max',max)
//         });
//     });
//     return max[0].split('|');
// };