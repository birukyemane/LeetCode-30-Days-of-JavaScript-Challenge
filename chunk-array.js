// problem: https://leetcode.com/problems/chunk-array/submissions/?utm_campaign=PostD21&utm_medium=Post&utm_source=Post&gio_link_id=YoXvrdGR

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {

    let result = []
    for(let i=0;i<arr.length;i=i+size){
        result.push(arr.slice(i,i+size))
    }

    return result;
};