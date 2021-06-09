/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
 var mostVisitedPattern = function(username, timestamp, website) {
    // 整合成以timestamp排序的三元数组， O(n log n)
    /**
     * [
            [ 'james', 1, 'maps' ],
            [ 'joe', 2, 'about' ],
            [ 'joe', 3, 'career' ],
            [ 'james', 4, 'home' ],
            [ 'james', 5, 'cart' ],
            [ 'joe', 6, 'home' ],
            [ 'james', 7, 'home' ],
            [ 'mary', 8, 'home' ],
            [ 'mary', 9, 'about' ],
            [ 'mary', 10, 'career' ]
        ]
     */
    const entriesMap = timestamp.map((item, i) => [username[i], timestamp[i], website[i]])
        .sort((a, b) => a[1] - b[1]); // a,b为新的三元数组的元素
    // 建立user的obj， O(n)
    /**
     * {james: [ 'maps', 'home', 'cart', 'home' ],
        joe: [ 'about', 'career', 'home' ],
        mary: [ 'home', 'about', 'career' ]}
     */
    const entriesByUsers = {};
    entriesMap.forEach(entry => {
        if (!entriesByUsers[entry[0]]) entriesByUsers[entry[0]] = [];
        entriesByUsers[entry[0]].push(entry[2]);
    });
    // 
    const seq = {};
    let max = ['', 0];
    console.log(Object.entries(entriesByUsers))
    Object.entries(entriesByUsers).forEach(([, websites]) => {
        // websites: [ 'maps', 'home', 'cart', 'home' ], 第1层循环
        // websites: [ 'about', 'career', 'home' ], 第2层循环
        // websites: [ 'home', 'about', 'career' ], 第2层循环
        const seqByUsers = {};
        
        for(let i = 0; i < websites.length - 2; i++) {
            for(let j = i + 1; j < websites.length - 1 ; j++) {
                for(let k = j + 1; k < websites.length ; k++) {
                    const key = `${websites[i]}|${ websites[j]}|${websites[k]}`;
                    console.log('key', key)
                    if (!seqByUsers[key]) seqByUsers[key] = 1;
                }
            }
        }
        console.log('seqByUsers', seqByUsers)
        /**
         * seqByUsers: {  //第1层循环
            'maps|home|cart': 1,
            'maps|home|home': 1,
            'maps|cart|home': 1,
            'home|cart|home': 1
            }
         */
        
        // 整合所有用户seqByUsers的key到新的obj-seq里面
        Object.keys(seqByUsers).forEach(seqByUser => {
            if (!seq[seqByUser]) seq[seqByUser] = 0;
            seq[seqByUser] += 1;
            // max = ['', 0];
            console.log('111', seqByUser)
            console.log('222', seqByUser.split('|').join(' '))
            console.log('333',max[0].split('|').join(' '))
            console.log('aaa y/n:',seqByUser.split('|').join(' ')<max[0].split('|').join(' '))
            console.log('bbb y/n:',seq[seqByUser] > max[1])
            if (
                (
                    seq[seqByUser] === max[1] && 
                    // 如果长度一样，按照lexicographically smallest字典顺序最小的排列
                    seqByUser.split('|').join(' ') < max[0].split('|').join(' ')
                ) 
                ||
                seq[seqByUser] > max[1]
            ) {
                max[0] =  seqByUser;
                max[1] = seq[seqByUser];
            }
            console.log('max',max)
        });
    });
    return max[0].split('|');
};

username=["joe","joe","joe","james","james","james","james","mary","mary","mary"];
timestamp=[6,2,3,4,5,1,7,8,9,10];
website=["home","about","career","home","cart","maps","home","home","about","career"];

mostVisitedPattern(username,timestamp,website)