let arr=[10,2,3,1,5,0,3,4,3,3,5,5,1];
arr.sort( (a,b)=>{
    return b-a
} )
let arrBysort=[]
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    arrBysort.push({
        index:i,
        item
    })
    
}
let t=0;
let m=0
for (let i = 0; i < arrBysort.length; i++) {
    let item = arrBysort[i];
     
    for (let j = 0; j < arrBysort.length; j++) {
        let  itemJ = arrBysort[j];
        
         if(item.item==itemJ.item){
             t++
          
             if(t==1){
                item.index=i
             }
             else if(t==2){
                 console.log(i)
                m=i
                item.index=m;
             }else if(t>2){
                item.index=m;
             }
          
         }
       //  itemJ.index=i-t-1
    }
    t=0;
}
console.log(arrBysort)