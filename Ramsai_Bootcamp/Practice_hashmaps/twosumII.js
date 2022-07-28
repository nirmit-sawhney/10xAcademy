/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(arr, target) {
    // 2 7 11 15
    // two pointers approach
    // l=0, r=numbers.length-1
    // 2 7 11 15
    // l      r
    // arr[l]+arr[r]=2+15=17>9
    // 17>9 r--
    // 2 7 11 15
    // l   r
    // arr[l]+arr[r]=2+11=13
    // 13>9 r--
    // 2 7 11 15
    // l r
    // 2+7 ==9
    // that is result
    let l=0,r=arr.length-1;
    let ans=[];
    while(l<r){
        let sum=arr[l]+arr[r];
        if(sum==target){
            ans.push(l+1);
            ans.push(r+1);
            break;
        }else if(sum>target){
            r--;
        }else{
            l++;
        }
    }
    return ans;
};