// https://leetcode.com/problems/array-wrapper/description/?utm_campaign=PostD28&utm_medium=Post&utm_source=Post&gio_link_id=1R3l3Q0P

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((accm,curr)=>{
        return accm + curr;
    },0)
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums.join(",")}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */