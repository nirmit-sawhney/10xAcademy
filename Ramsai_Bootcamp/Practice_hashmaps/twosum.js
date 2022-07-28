var twoSum = function(nums, target) {
    let map=new Map();//ele->ind
    let arr=[];
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            arr.push(map.get(target-nums[i]));
            arr.push(i);
            break;
        }else{
            map.set(nums[i],i);
        }
    }
    return arr;
    
    //map-[]
    //nums[i]=2
    //map.has(9-2)
    // 2->0
    //map.has(9-7)
    //[0]
    //[0,1]
};