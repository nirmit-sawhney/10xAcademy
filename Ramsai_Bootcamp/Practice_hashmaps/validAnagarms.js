/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    //s
    //a->3
    //n->1
    //g->1
    //r->1
    //m->1
    
    //t  nagaramg
    //if(map.has(n))
    //n->0
    //a->0
    //g->0
    //r->0
    //m->0
    
    let map=new Map();
    for(let c of s){
        if(map.has(c)){
            map.set(c,map.get(c)+1);
        } else {
            map.set(c,1);
        }
    }
    
    for(let c of t){
        if(map.has(c) && map.get(c)>0){
            map.set(c,map.get(c)-1);
        }else{
            return false;
        }
    }
    for(let val of map.values()){
        if(val>0){
            return false;
        }
    }
    return true;
};