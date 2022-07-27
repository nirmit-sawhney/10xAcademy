let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}

//2 1 1 2 0 0
let cnt0=0,cnt1=0,cnt2=0;
for(let i=0;i<n;i++){
    if(arr[i]==0){
        cnt0++;
    }else if(arr[i]==1){
        cnt1++;
    }else{
        cnt2++;
    }
}
//first zero-> one-> two
//2 2 2
let i=0;
while(cnt0>0){
    arr[i]=0;
    i++;
    cnt0--;
}
//0 0 1 1 2 2
while(cnt1>0){
    arr[i++]=1;
    cnt1--;
}
while(cnt2>0){
    arr[i++]=2;
    cnt2--;
}