// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    //map
    //sorted string -> array of all the anagrams
    
    //aet->[eat,tea,ate]
    //ant->[tan,nat]
    //abt->[bat]
    
    //[eat,tea,ate],[tan,nat],[bat]
    
    //sorted= eat.split("")->['e','a','t']->['a','e','t']->join("")->"aet"
    let map=new Map();
    for(let str of strs){
        let sorted=str.split("").sort().join("");
        
        if(map.has(sorted)){
            map.set(sorted, map.get(sorted).concat([str]));
        }else{
            map.set(sorted,[str]);
        }
    }
    // let arr=[];
    // for(let val of map.values()){
    //     arr.push(val);
    // }
    // return arr;
    return Array.from(map.values());
};