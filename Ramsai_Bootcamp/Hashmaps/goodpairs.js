var numIdenticalPairs = function(nums) {
    // let count=0;
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]==nums[j]){
    //             count++;
    //         }
    //     }
    // }
    // return count;
    // O(N^2)
    
    // 1 2 3 1 1 3
    // 4
    
    // count+=map.get(1)//1+1
    // count=1+2+1
    
    // map.set(1,1);
    
    // 1->3
    // 2->1
    // 3->2
    
    let map=new Map();
    let count=0;
    for(let val of nums){
        if(map.has(val)){
            count+=map.get(val);
            let prev=map.get(val);
            let curr=prev+1;
            map.set(val,curr);
        }else{
            map.set(val,1);
        }
    }
    return count;
};