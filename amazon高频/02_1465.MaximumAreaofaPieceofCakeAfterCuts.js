/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    // sort the array
     horizontalCuts.sort((a,b)=>a-b);
     verticalCuts.sort((a,b)=>a-b); ;// 不能写verticalCuts.sort()，要写完整;
     let max_height, max_width;
     // 边界和cut线的情况
     max_height = Math.max(horizontalCuts[0], h - horizontalCuts[horizontalCuts.length-1]);
     for(let i=0; i<horizontalCuts.length-1;i++){
         max_height = Math.max(horizontalCuts[1+i]-horizontalCuts[i], max_height)
     }
     console.log('max_height',max_height)
      // 边界和cut线的情况
      max_width = Math.max(verticalCuts[0], w - verticalCuts[verticalCuts.length-1]);
      for(let i=0; i<verticalCuts.length-1;i++){
          max_width = Math.max(verticalCuts[1+i]-verticalCuts[i], max_width)
      }
      console.log('max_width', max_width)
      return (max_width * max_height) % (1e9 + 7); //防止溢出
 };



const horizontalCuts = [2,1,9,6,7];
const verticalCuts = [35,5,21,12,4,7,18,32,36,40,10,30,24,17,8,20,9,3,34,41,26,42,28,31,38,2,14,19,37,33,23,43,29,15,16,11];
console.log(maxArea(5,4,horizontalCuts, verticalCuts))