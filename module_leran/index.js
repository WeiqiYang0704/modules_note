let Poker=require("./poker")
// let one=new Poker(1,11);
let PokerArr=[];
for(let i=1;i<=13;i++){
    for(let j=1;j<=4;j++){
        PokerArr.push(new Poker(j,i))
    }
}
PokerArr.push(new Poker(null,14))
PokerArr.push(new Poker(null,15))


let arr=require("./util")
arr.sortArr(PokerArr);
// for (const item of PokerArr) {
//     console.log(item.toString())
// }
let person1=PokerArr.slice(0,17);
let person2=PokerArr.slice(17,34);
let person3=PokerArr.slice(34,51);
let zhuo=PokerArr.slice(51);
console.log('玩家1')
let str1=''
for (const item of person1) {
   str1+=item.toString()+' '
}
console.log(str1)
console.log('玩家2')
let str2=''
for (const item of person2) {
   str2+=item.toString()+' '
}
console.log(str2)
console.log('玩家3')
let str3=''
for (const item of person3) {
   str3+=item.toString()+' '
}
console.log(str3)
let strAll=''
for (const item of zhuo) {
    strAll+=item.toString()+' '
 }
 console.log(strAll)
