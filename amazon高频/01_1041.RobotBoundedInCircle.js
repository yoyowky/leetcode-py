/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    // direction: n:0, e:1, s:2, w:3
    const direction = [[0,1], [1,0],[0,-1],[-1,0]];
    let p =[0,0];
    let index = 0;
    let x=0, y=0;
    for(let i=0; i<instructions.length; i++){
        if(instructions.charAt(i) === 'L'){
            index = (index+3)%4;
        } else if(instructions.charAt(i) === 'R'){
            index = (index+1)%4;
        } else {
            p[0]+=direction[index][0];
            p[1]+=direction[index][1];
        }
    }
    // face not to north,  to [0,0]
    return index !==0 || (p[0]  === 0 && p[1]  === 0)
};

console.log(isRobotBounded("GLRLLGLL"))